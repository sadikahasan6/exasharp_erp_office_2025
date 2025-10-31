<script>
    import Dashboard from "$lib/components/ui/dashboard/dashboard.svelte";
    const navItems = [
        { name: "Job Circulars", href: "/jobs" },
        { name: "Update Profile", href: "/jobs/update-profile" },
        { name: "Pending Applications", href: "/jobs/pending-applications" },
        { name: "Interview Schedule", href: "/jobs/interviews" },
        { name: "Offers", href: "/jobs/offers" },
        { name: "Past Applications", href: "/jobs/history" },
        { name: "Notifications", href: "/jobs/notifications" },
    ];
</script>

<Dashboard {navItems}><slot /></Dashboard>
