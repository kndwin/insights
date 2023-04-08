import { z } from 'zod';
import { procedure, router } from './trpc';

import { waitlist } from '~/routes/waitlist/router.server';

export const appRouter = router({
	hello: procedure.input(z.object({ text: z.string() })).query(({ input }) => {
		return {
			greeting: `hello ${input.text}`,
		};
	}),
	waitlist,
});

// export type definition of API
export type AppRouter = typeof appRouter;
