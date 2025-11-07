<script lang="ts">
    let mode = false;
    let usercontrol = false;
    import { clickOutside } from "$lib/clickoutside";
    let theme: "default" | "light" | "dark" = "default";
    export let toggleSidebar: () => void;
</script>

<div class="h-15 px-8 flex justify-between items-center">
    <div class="flex items-center gap-3 text-blue-900 dark:text-blue-300">
        <button
            on:click={toggleSidebar}
            aria-label="Toggle side navigation"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 16 16"
                class="hover:border-2 p-0.5 rounded-md hover:border-blue-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-zinc-600/30"
                {...$$props}
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
                    clip-rule="evenodd"
                />
            </svg></button
        >
        <span class="  text-2xl flex items-center">EXASHARP</span>
    </div>

    <span class="flex gap-2 items-center cursor-pointer">
        <div
            use:clickOutside={() => (mode = false)}
            class="relative flex items-center p-1.5"
        >
            <button
                class="p-1 hover:bg-blue-100 dark:hover:bg-zinc-400/70 rounded-full cursor-pointer"
                on:click={() => (mode = !mode)}
                on:keydown={(e) => e.key === "Enter" && (mode = !mode)}
                type="button"
                aria-label="Toggle user controls"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    class="hover:bg-blue-200 dark:bg-blend-soft-light rounded-full"
                    {...$$props}
                >
                    <g fill="none">
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            stroke-width="2"
                        />
                        <path
                            fill="currentColor"
                            d="M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z"
                        />
                    </g>
                </svg>
            </button>
            <div
                class="absolute top-10 flex flex-col gap-1 -right-1 w-34 border border-blue-100 dark:border-zinc-800 bg-white dark:bg-zinc-700 shadow-sm rounded-xl p-1.5 text-sm {mode
                    ? ''
                    : 'hidden'}"
            >
                <button
                    on:click={() => {
                        localStorage.removeItem("theme");
                        const prefersDark = window.matchMedia(
                            "(prefers-color-scheme: dark)",
                        ).matches;
                        document.documentElement.classList.toggle(
                            "dark",
                            prefersDark,
                        );
                    }}
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    System
                </button>
                <button
                    on:click={() => {
                        document.documentElement.classList.remove("dark");
                        theme = "light";
                        localStorage.theme = "light";
                    }}
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Light mode
                </button>

                <button
                    on:click={() => {
                        document.documentElement.classList.add("dark");
                        theme = "dark";
                        localStorage.theme = "dark";
                    }}
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Dark mode
                </button>
            </div>
        </div>
        <span
            class="h-10 w-10 rounded-full relative transition-all duration-100 dark:hover:bg-zinc-400/70 hover:bg-blue-100 justify-center items-center flex"
        >
            <div
                class="absolute hidden overflow-hidden top-11 flex-col gap-1 right-0 w-85 border border-blue-100 bg-white shadow-sm rounded-xl p-1.5 text-sm"
            >
                <!-- FOR MENU -->
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                {...$$props}
            >
                <path
                    fill="currentColor"
                    d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"
                />
            </svg>
        </span>
        <div
            use:clickOutside={() => (usercontrol = false)}
            class="flex relative items-center transition-all duration-100 h-10 w-10"
        >
            <button
                class="p-1 hover:bg-blue-100 dark:hover:bg-zinc-400/70 rounded-full cursor-pointer"
                on:click={() => (usercontrol = !usercontrol)}
                on:keydown={(e) =>
                    e.key === "Enter" && (usercontrol = !usercontrol)}
                type="button"
                aria-label="Toggle user controls"
            >
                <img class="rounded-full" src="sadik.jpg" alt="User profile" />
            </button>
            <div
                class="absolute top-11 flex flex-col gap-1 right-0 w-54 border border-blue-100 dark:border-zinc-800 bg-white dark:bg-zinc-700 shadow-sm rounded-xl p-1.5 text-sm {usercontrol
                    ? ''
                    : 'hidden'}"
            >
                <div
                    class="py-1.5 px-2 justify-between rounded-lg flex items-center gap-2 bg-blue-800/4 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white text-blue-900 hover:bg-blue-400/10"
                >
                    <div>
                        <span class="text-sm">Sadik Ahsan</span>
                        <br /> ERP developer
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="opacity-50"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        {...$$props}
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                        />
                    </svg>
                </div>
                <div
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Help center
                </div>
                <div
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Settings
                </div>

                <div
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Log out
                </div>
                <hr class="text-gray-100 dark:text-zinc-800 mx-1.5" />
                <div
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Release notes
                </div>
                <div
                    class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 dark:hover:text-white"
                >
                    Terms & policies
                </div>
            </div>
        </div>
    </span>
</div>
