import { z } from 'zod';

export const submitFormSchema = z.object({
	name: z.string().nonempty(),
	industry: z.string().nonempty(),
	type: z.enum(['mentee', 'mentor']),
	goals: z.string().nonempty(),
	company: z.string().nonempty(),
	email: z.string().email(),
});
