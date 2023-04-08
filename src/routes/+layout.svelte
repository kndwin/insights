<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import '~/app.css';
	import type { PageData } from './$types';
	import Header from './_layout/header.svelte';
	import Footer from './_layout/footer.svelte';
	import { theme } from './_layout/store';

	export let data: PageData;

	data.trpc.setContext(data.trpc.client, data.trpc.queryClient);

	$: dark = $theme === 'dark';
</script>

<QueryClientProvider client={data.trpc.queryClient}>
	<div class="flex h-full min-h-screen bg-olive-1" class:dark>
		<div
			class="container prose prose-olive mx-auto flex h-full min-h-screen max-w-4xl flex-col p-4"
		>
			<Header />
			<div class="flex-1 pb-8">
				<slot />
			</div>
			<Footer />
		</div>
	</div>
</QueryClientProvider>
