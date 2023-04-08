<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { theme } from './store';

	const toggle = () => {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	};

	$: dark = $theme === 'dark';
</script>

<button on:click={toggle}>
	{#if dark}
		<Moon size={20} />
	{:else}
		<Sun size={20} />
	{/if}
</button>
