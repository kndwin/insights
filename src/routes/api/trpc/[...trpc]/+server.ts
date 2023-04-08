import { createTRPCRequestHandler } from '@bevm0/trpc-sveltekit';
import { type AppRouter, appRouter } from '~/lib/server/routers';
import type { RouteParams, RouteId } from './$types';
import { db } from '~/lib/db';

// export GET and POST SvelteKit request handler
// @see https://trpc.io/docs/api-handler
// @see https://kit.svelte.dev/docs/routing#server

const requestHandler = createTRPCRequestHandler<
	AppRouter,
	RouteParams,
	RouteId
>({
	endpoint: '/api/trpc',
	router: appRouter,
	createContext: (opts, event) => ({ opts, event, db }),
});

export const GET = requestHandler;
export const POST = requestHandler;
