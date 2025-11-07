<script lang="ts">
    import SideNav from "$lib/components/ui/dashboard/side-nav.svelte";
    import TopNav from "$lib/components/ui/dashboard/top-nav.svelte";
    export let navItems: { name: string; href: string }[] = [];
    
    // Add state for sidebar visibility
    let isSidebarOpen = true;

    // Toggle function
    const toggleSidebar = () => {
        isSidebarOpen = !isSidebarOpen;
    };
</script>

<div class="h-screen flex flex-col gap-2 fixed inset-0 w-full bg-linear-to-r dark:text-zinc-300 from-white to-blue-50/50 dark:from-zinc-700 dark:to-gray-800 overflow-hidden">
    <TopNav {toggleSidebar} />

    <div class="flex px-7 flex-1 gap-1 overflow-hidden">
        <!-- Add transition classes for smooth animation -->
        <div class="transition-all duration-300 ease-in-out {isSidebarOpen ? 'w-68' : 'w-0'} overflow-hidden">
            <div class="w-68 flex flex-col pr-5 gap-2">
                <SideNav {navItems} />
            </div>
        </div>

        <div class="flex-1 overflow-y-auto bg-white/80 rounded-2xl border border-blue-50 dark:border-0 dark:bg-zinc-600/85 dark:text-white px-10 py-5 mb-5">
            <slot />
        </div>
    </div>
</div>