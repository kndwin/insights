import { procedure, router } from '~/lib/server/trpc';
import { waitlistTable, submitFormSchema } from '~/lib/db';

export const waitlist = router({
	submitForm: procedure
		.input(submitFormSchema)
		.mutation(async ({ ctx, input }) => {
			return ctx.db.insert(waitlistTable).values(input);
		}),
});
