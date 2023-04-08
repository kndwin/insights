<script lang="ts">
	import { Eye } from 'lucide-svelte';
	import ButtonToggleTheme from './button-toggle-theme.svelte';
</script>

<div class="my-8">
	<div class="flex items-center justify-between">
		<a href="/" class="no-underline">
			<h1 class="my-0 flex items-center gap-2 text-3xl font-bold sm:text-6xl">
				<Eye size={42} />
				insights
				<span class="h-fit bg-olive-3 px-2 py-1 text-xs font-bold">BETA</span>
			</h1>
		</a>
		<div class="flex items-center gap-4">
			<ButtonToggleTheme />
		</div>
	</div>
	<p>Experience mentorship from people doing the work.</p>
</div>
