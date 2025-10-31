<script lang="ts">
    const navItems= [
        { name: "Manage Employees", href: "/protected/manage-employees" },
        { name: "Attendance", href: "/protected/attendance" },
        { name: "Notices", href: "/protected/notices" },
        { name: "Policies", href: "/protected/policies" }
    ]
</script>
<div
    class="bg-blue-400/10 cursor-pointer text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-lg transition-all duration-100"
>
    Dashboard
</div>

{#each navItems as item}
    <a href={item.href}
        class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black dark:hover:text-white rounded-lg transition-all duration-100"
    >
        {item.name}
</a>
{/each}
