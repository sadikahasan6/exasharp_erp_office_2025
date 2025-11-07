<script lang="ts">
	import SideNav from "$lib/components/ui/dashboard/side-nav.svelte";
	import TopNav from "$lib/components/ui/dashboard/top-nav.svelte";
	export let navItems: { name: string; href: string }[] = [];
	import { closeSidenavEffect } from "$lib/stores/closesideNav";
	let active = false;
	$: closeSidenavEffect.subscribe((v: boolean) => (active = v));
</script>

<div
	class="h-screen flex flex-col gap-2 fixed inset-0 w-full bg-linear-to-r dark:text-zinc-300 from-white to-blue-50/50 dark:from-zinc-700 dark:to-gray-800 overflow-hidden"
>
	<TopNav />

	<div class="flex flex-1 gap-1 overflow-hidden">
		<div class:active>
			<div class="w-68 flex flex-col px-5 gap-2">
				{#if active}
					<SideNav {navItems} />
				{/if}
			</div>
		</div>

		<div
			class="flex-1 overflow-y-auto bg-white/80 rounded-2xl border border-blue-50 dark:border-0 dark:bg-zinc-600/85 dark:text-white px-10 py-5 mb-5 mr-5"
		>
			<slot />
		</div>
	</div>
</div>
