import { initTRPC, type inferAsyncReturnType } from '@trpc/server';
import { db } from '../db/connection';

const createContext = () => {
	return {
		db,
	};
};

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
