import { httpBatchLink } from '@trpc/client';
import { createTRPCSvelte } from '@bevm0/trpc-svelte-query';
import { QueryClient } from '@tanstack/svelte-query';
import type { AppRouter } from '~/lib/server/routers';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	const queryClient = new QueryClient();

	const trpc = createTRPCSvelte<AppRouter>(
		{
			links: [
				httpBatchLink({
					url: 'http://localhost:5173/api/trpc',
					fetch: event.fetch,
				}),
			],
		},
		{ svelteQueryContext: queryClient }
	);

	return { trpc };
};