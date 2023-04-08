<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';

	import { submitFormSchema } from './schema';
	import { trpc } from '~/lib/trpc';

	const formMutation = trpc.waitlist.submitForm.createMutation();
	const { form, errors, touched, isSubmitting } = createForm({
		onSubmit: async (values) => {
			await $formMutation.mutateAsync(values);
		},
		onError: (error) => {
			console.log({ error });
			alert(
				`Error! Something went wrong on our servers. We're working on it now!`
			);
		},
		extend: validator({ schema: submitFormSchema }),
	});
</script>

<div
	class="prose prose-olive mx-auto mt-8 rounded-lg border border-olive-6 p-4 shadow-sm sm:p-8"
>
	{#if !$formMutation.isSuccess}
		<form use:form class="flex flex-col gap-4">
			<h1 class="text-2xl font-bold">Join the Waitlist</h1>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<label for="name" class="flex flex-col gap-1 text-sm">
					What is your full name
					<input
						type="text"
						name="name"
						placeholder="Name"
						class="rounded border border-olive-8 bg-olive-1 px-2 py-1 text-sm"
					/>
					{#if $errors.name && $touched.name}
						<p class="my-0 text-sm text-red-500">{$errors.name}</p>
					{/if}
				</label>
				<label for="name" class="flex flex-col gap-1 text-sm">
					What is your email address?
					<input
						type="email"
						name="email"
						placeholder="Email"
						class="rounded border border-olive-8 bg-olive-1 px-2 py-1 text-sm"
					/>
					{#if $errors.name && $touched.name}
						<p class="my-0 text-sm text-red-500">{$errors.name}</p>
					{/if}
				</label>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<label for="name" class="flex flex-col gap-1 text-sm">
					What industry are you in?
					<input
						class="appearance-none rounded border border-olive-8 bg-olive-1 px-2 py-1"
						type="text"
						list="industry"
						name="industry"
						placeholder="Front-end"
					/>
					<datalist id="industry" class="appearance-none">
						<option value="Front-end">Front-end</option>
						<option value="Back-end">Back-end</option>
						<option value="DevOps">DevOps</option>
					</datalist>
					{#if $errors.industry}
						<p class="my-0 text-sm text-red-500">{$errors.industry}</p>
					{/if}
				</label>
				<label for="name" class="flex flex-col gap-1 text-sm">
					Do you want to be mentee or mentor?
					<select
						name="type"
						class="appearance-none rounded border border-olive-8 bg-olive-1 px-2 py-1"
					>
						<option value="mentee">Mentee</option>
						<option value="mentor">Mentor</option>
					</select>
					{#if $errors.type}
						<p class="my-0 text-sm text-red-500">{$errors.type}</p>
					{/if}
				</label>
			</div>
			<label for="name" class="flex flex-col gap-1 text-sm">
				What are you hoping to gain from your mentorship?
				<textarea
					class="appearance-none rounded border border-olive-8 bg-olive-1 px-2 py-1"
					name="goals"
					cols="30"
					rows="10"
				/>
				{#if $errors.goals}
					<p class="my-0 text-sm text-red-500">{$errors.goals}</p>
				{/if}
			</label>
			<label for="name" class="flex flex-col gap-1 text-sm">
				If you're a mentor, what company are you working in?
				<input
					type="text"
					name="company"
					placeholder="Google"
					class="rounded border border-olive-8 bg-olive-1 px-2 py-1 text-sm"
				/>
				{#if $errors.company}
					<p class="my-0 text-sm text-red-500">{$errors.company}</p>
				{/if}
			</label>
			<div class="flex justify-end">
				<button
					type="submit"
					class="w-fit rounded bg-olive-12 px-2 py-1 text-olive-1 dark:bg-olive-3 dark:text-olive-12"
				>
					{#if $isSubmitting}
						Loading...
					{:else}
						Submit
					{/if}
				</button>
			</div>
		</form>
	{:else}
		<div>
			<h1 class="text-2xl font-bold">Thank you for your interest!</h1>
			<p class="text-sm">
				🚀 We'll reach out to you when we're ready to launch.
			</p>
		</div>
	{/if}
</div>
