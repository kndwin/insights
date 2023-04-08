import { procedure, router } from '~/lib/server/trpc';
import { waitlistTable, db, submitFormSchema } from '~/lib/db';

export const waitlist = router({
	submitForm: procedure.input(submitFormSchema).mutation(async ({ input }) => {
		const transaction = db.insert(waitlistTable).values(input);
		return transaction;
	}),
});
