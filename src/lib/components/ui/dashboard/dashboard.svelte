<script lang="ts">
    import SideNav from "$lib/components/ui/dashboard/side-nav.svelte";
    import TopNav from "$lib/components/ui/dashboard/top-nav.svelte";
    export let navItems: { name: string; href: string }[] = [];
</script>

<div
    class="h-screen flex flex-col gap-4 fixed w-full bg-linear-to-r dark:text-zinc-300 from-white to-blue-50/50 dark:from-zinc-700 dark:to-gray-800"
>
    <TopNav />
    <div class="flex-1 flex gap-1">
        <div class="w-68 h-full flex flex-col px-5 gap-2">
            <SideNav {navItems} />
        </div>

        <div
            class="h-full flex-1 bg-white/80 rounded-2xl border border-blue-50 dark:border-0 dark:bg-zinc-600/85 dark:text-white px-10 py-5 mr-5"
        >
            <slot />
        </div>
    </div>
    <div class="h-1 px-8 items-center"></div>
</div>
