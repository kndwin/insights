import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { env } from '$env/dynamic/private';

const connection = connect({
	url: env.DATABASE_URL,
});

export const db = drizzle(connection);
