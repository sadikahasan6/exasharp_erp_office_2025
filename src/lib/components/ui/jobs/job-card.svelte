<script lang="ts">
    // let jobCards: { title: string; timeAgo:string, recruiter: string, salary: number, condition: string, skillLevel:string, description: string }[] = [];
    const jobs = [
        {
            title: "Graphic Designer Needed for Canva Projects",
            timeAgo: "22 hours ago",
            recruiter: "MK Footwear PLC",
            salary: 50000,
            salary_condition: "Negotiable",
            skillLevel: "Expert",
            description:
                "We are seeking a talented graphic designer to create visually appealing designs for our Canva projects. The ideal candidate should have experience with Canva and a strong portfolio of design work.",
        },
        {
            title: "Junior Web Developer (HTML, CSS, JavaScript)",
            timeAgo: "1 day ago",
            recruiter: "Exasharp ERP Solutions",
            salary: 30000,
            salary_condition: "Fixed",
            skillLevel: "Intermediate",
            description:
                "Looking for a motivated junior developer to assist in front-end development of our ERP modules. Basic understanding of responsive design and REST APIs required.",
        },
        {
            title: "Factory Production Supervisor",
            timeAgo: "3 days ago",
            recruiter: "Apollo Footwear Ltd.",
            salary: 45000,
            salary_condition: "Negotiable",
            skillLevel: "Experienced",
            description:
                "The supervisor will oversee daily production operations, manage workers, and ensure compliance with quality and safety standards within the footwear manufacturing line.",
        },
        {
            title: "Accounts Executive",
            timeAgo: "6 hours ago",
            recruiter: "Delta Shoe Industries",
            salary: 40000,
            salary_condition: "Fixed",
            skillLevel: "Intermediate",
            description:
                "Responsible for maintaining financial records, preparing reports, and assisting in audits. Candidates must be familiar with ERP-based accounting systems.",
        },
        {
            title: "HR & Compliance Officer",
            timeAgo: "12 hours ago",
            recruiter: "Prime Leather Works",
            salary: 55000,
            salary_condition: "Negotiable",
            skillLevel: "Expert",
            description:
                "We need an HR professional experienced in labor law, BSCI, and ISO documentation. Must manage recruitment, attendance, and employee relations effectively.",
        },
        {
            title: "Cutting Machine Operator",
            timeAgo: "2 days ago",
            recruiter: "Sunrise Footwear Factory",
            salary: 25000,
            salary_condition: "Fixed",
            skillLevel: "Entry Level",
            description:
                "Operate and maintain cutting machines used for leather and synthetic materials. Training will be provided for fresh candidates.",
        },
        {
            title: "Software Engineer (Backend - Bun & PostgreSQL)",
            timeAgo: "4 hours ago",
            recruiter: "TechNex ERP Systems",
            salary: 70000,
            salary_condition: "Negotiable",
            skillLevel: "Expert",
            description:
                "Seeking a backend engineer skilled in Bun runtime, PostgreSQL, and REST API development. Experience with authentication and ERP modules is a plus.",
        },
        {
            title: "QC Inspector (Footwear)",
            timeAgo: "18 hours ago",
            recruiter: "BlueStar Footwear Co.",
            salary: 35000,
            salary_condition: "Fixed",
            skillLevel: "Intermediate",
            description:
                "Inspect shoe components and finished goods to ensure quality meets customer requirements. Report and document non-conformities.",
        },
        {
            title: "Digital Marketing Specialist",
            timeAgo: "5 hours ago",
            recruiter: "Creative Edge Agency",
            salary: 48000,
            salary_condition: "Negotiable",
            skillLevel: "Experienced",
            description:
                "Plan, execute, and optimize digital marketing campaigns across social media, email, and Google Ads. Strong analytical and creative skills required.",
        },
        {
            title: "Maintenance Electrician",
            timeAgo: "2 days ago",
            recruiter: "Alpha Sole Manufacturing Ltd.",
            salary: 38000,
            salary_condition: "Fixed",
            skillLevel: "Intermediate",
            description:
                "Perform routine electrical maintenance and troubleshoot machinery faults in the production area. Must have technical diploma or equivalent experience.",
        },
    ];
</script>

{#each jobs as job}
    <div
        class="border cursor-pointer border-blue-100 dark:border-zinc-500 rounded-lg px-6 py-4"
    >
        <div class="text-lg hover:text-blue-900 dark:hover:text-blue-400">
            {job.title}
        </div>
        <div class="text-xs text-zinc-400 py-1">
            Posted {job.timeAgo} by {job.recruiter}
        </div>
        <div class="flex justify-between py-3">
            <div
                class="text-sm flex w-1/2 items-center gap-4 text-zinc-600 dark:text-zinc-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 2048 2048"
                    {...$$props}
                >
                    <path
                        fill="currentColor"
                        d="M2048 384v1280H128v-256H0V256h1792v128zm-512 0q0 27 10 50t27 40t41 28t50 10V384zM128 512q27 0 50-10t40-27t28-41t10-50H128zm0 512q53 0 99 20t82 55t55 81t20 100h1024q0-53 20-99t55-82t81-55t100-20V640q-53 0-99-20t-82-55t-55-81t-20-100H384q0 53-20 99t-55 82t-81 55t-100 20zm1536 128q-27 0-50 10t-40 27t-28 41t-10 50h128zM128 1280h128q0-27-10-50t-27-40t-41-28t-50-10zm1792-768h-128v896H256v128h1664zM448 896q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m896 0q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m-448 256q-53 0-99-20t-82-55t-55-81t-20-100V768q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100v128q0 53-20 99t-55 82t-81 55t-100 20M768 896q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50V768q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50z"
                    />
                </svg>
                <div class="flex flex-col gap-0">
                    <div class="text-lg">{job.salary} BDT</div>
                    <div class="text-zinc-400 text-xs">
                        {job.salary_condition}
                    </div>
                </div>
            </div>
            <div
                class="text-sm flex w-1/2 items-center gap-4 text-zinc-600 dark:text-zinc-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    {...$$props}
                >
                    <path
                        fill="currentColor"
                        d="M14.5 2a3.25 3.25 0 0 1 3.218 2.795a3.876 3.876 0 0 1 2.08 6.633A4 4 0 0 1 22 15v.25a4 4 0 0 1-3.367 3.95c-.431 1.613-1.901 2.8-3.627 2.8c-1.228 0-2.32-.59-3.006-1.504A3.75 3.75 0 0 1 8.994 22c-1.726 0-3.195-1.187-3.627-2.8A4 4 0 0 1 2 15.25V15a4 4 0 0 1 2.2-3.572a3.876 3.876 0 0 1 2.082-6.633A3.25 3.25 0 0 1 12 3.174A3.24 3.24 0 0 1 14.5 2m-5 1.5a1.75 1.75 0 0 0-1.75 1.75v.25a.75.75 0 0 1-.75.75h-.125a2.375 2.375 0 1 0 0 4.75H7a2.25 2.25 0 0 1 2.238 2.02l.012.23v.396a2 2 0 1 1-1.5 0v-.396l-.004-.077A.75.75 0 0 0 7 12.5H6A2.5 2.5 0 0 0 3.5 15v.25a2.5 2.5 0 0 0 2.5 2.5a.75.75 0 0 1 .719.542l.026.14h.002A2.276 2.276 0 0 0 8.994 20.5a2.255 2.255 0 0 0 2.256-2.25v-9h-.896a2 2 0 1 1 0-1.5h.896v-2.5A1.75 1.75 0 0 0 9.5 3.5m8.23 9a2 2 0 0 1-.98.852v.898a2.25 2.25 0 0 1-2.25 2.25h-1.75v1.75c0 1.24 1.011 2.25 2.256 2.25a2.276 2.276 0 0 0 2.247-2.068h.002l.026-.14A.75.75 0 0 1 18 17.75a2.5 2.5 0 0 0 2.5-2.5V15a2.5 2.5 0 0 0-2.5-2.5zM8.5 15a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m6-11.5a1.75 1.75 0 0 0-1.75 1.741V15h1.75a.75.75 0 0 0 .75-.75v-.898a1.999 1.999 0 1 1 2.646-2.483a2.374 2.374 0 0 0-.771-4.619H17a.75.75 0 0 1-.75-.75v-.25A1.75 1.75 0 0 0 14.5 3.5M16 11a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M8.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                    />
                </svg>
                <div class="flex flex-col gap-0">
                    <div class="text-lg">{job.skillLevel}</div>
                    <div class="text-zinc-400 text-xs">Experience level</div>
                </div>
            </div>
        </div>
        <div class="text-sm text-zinc-600 dark:text-zinc-300 my-2">
            {job.description}
        </div>
        <div class="py-3 flex gap-2 text-zinc-500 dark:text-zinc-400">
            <div
                class="text-xs py-1.5 px-3 bg-zinc-200 dark:bg-zinc-700 rounded-full"
            >
                MK
            </div>
            <div
                class="text-xs py-1.5 px-3 bg-zinc-200 dark:bg-zinc-700 rounded-full"
            >
                Graphics
            </div>
        </div>
        <div class="py-3">
            <a
                href="/jobs"
                class="w-fit cursor-pointer text-sm px-4 py-2 rounded-lg dark:bg-white/70 bg-black/70 text-white dark:text-black"
                >See more</a
            >
        </div>
    </div>
{/each}
