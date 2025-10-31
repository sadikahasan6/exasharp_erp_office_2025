<script>
    import Dashboard from "$lib/components/ui/dashboard/dashboard.svelte";
    const navItems = [
        { name: "Dashboard", href: "/jobs" },
        { name: "Manage Employees", href: "/protected/manage-employees" },
        { name: "Attendance", href: "/protected/attendance" },
        { name: "Notices", href: "/protected/notices" },
        { name: "Policies", href: "/protected/policies" },
    ];
</script>

<Dashboard {navItems}><slot /></Dashboard>
