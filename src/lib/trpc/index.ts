import { httpBatchLink } from '@trpc/client';
import { createTRPCSvelte } from '@bevm0/trpc-svelte-query';
import type { AppRouter } from '~/lib/server/routers';
import { base } from '$app/paths';

export const trpc = createTRPCSvelte<AppRouter>({
	links: [httpBatchLink({ url: `${base}/api/trpc` })],
});
