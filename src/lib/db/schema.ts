import { mysqlTable, serial, varchar, mysqlEnum } from 'drizzle-orm/mysql-core';
import { createInsertSchema } from 'drizzle-zod';

export { db } from './connection';

export const waitlistTable = mysqlTable('waitlist', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	email: varchar('email', { length: 256 }).notNull(),
	type: mysqlEnum('type', ['mentor', 'mentee']).notNull(),
	goals: varchar('goals', { length: 1024 }).notNull(),
	company: varchar('company', { length: 1024 }).notNull(),
	industry: varchar('industry', { length: 256 }).notNull(),
});

export const submitFormSchema = createInsertSchema(waitlistTable).omit({
	id: true,
});
