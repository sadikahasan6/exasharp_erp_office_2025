<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Exasharp</title>
</svelte:head>

<div class="">
	{@render children?.()}
</div>
