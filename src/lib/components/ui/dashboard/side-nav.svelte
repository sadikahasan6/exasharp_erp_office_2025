<script lang="ts">
    import { page } from '$app/state';
    export let navItems: { name: string; href: string }[] = [];
</script>

{#each navItems as item}
    <a
        href={item.href}
        class="px-3 py-1.5 cursor-pointer rounded-lg transition-all duration-100
               {page.url.pathname === item.href
                   ? 'bg-blue-400/10 text-blue-800 dark:text-blue-300'
                   : 'hover:bg-blue-400/10 hover:text-black dark:hover:text-white'}"
    >
        {item.name}
    </a>
{/each}