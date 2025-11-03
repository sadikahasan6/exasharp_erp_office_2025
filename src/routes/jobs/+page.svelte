<script>
    import JobCard from "$lib/components/ui/jobs/job-card.svelte";

</script>
<div class="text-sm flex gap-8 mb-3 text-gray-800 dark:text-zinc-200">
    <div class="cursor-pointer">Production</div>
    <div class="cursor-pointer">Planning</div>
    <div class="cursor-pointer">Human Resources</div>
    <div class="cursor-pointer">Finance & Accounting</div>
    <div class="cursor-pointer">More...</div>
</div>
<div class=" py-10">
    <div class="text-4xl text-center">Find the best jobs</div>
    <div class="text-lg text-center mt-4">
        Explore job opportunities and get all the info you need.
    </div>
    <div class="text-center text-zinc-700 dark:text-zinc-400 mt-3">
        50+ Organizations collect empoyees from here
    </div>
    <div class="mx-auto w-fit mt-6">
        <a
            href="/jobs"
            class="w-fit cursor-pointer px-4 py-2 rounded-lg dark:bg-white/70 bg-black/70 text-white dark:text-black"
            >Apply now</a
        >
    </div>
</div>


<div class="grid grid-cols-2 py-10 gap-6 max-xl:grid-cols-1">
    <JobCard />
</div>
