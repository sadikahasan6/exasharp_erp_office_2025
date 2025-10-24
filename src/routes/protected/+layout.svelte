<script>
    import { onMount } from "svelte";
    let usercontrol = false;
    import { clickOutside } from "$lib/clickoutside";
    /**
     * @type {string}
     */
    let theme;
    function applyTheme() {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            // default = system preference
            localStorage.removeItem("theme");
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }
    onMount(() => {
        const saved = localStorage.theme;
        if (saved === "dark" || saved === "light") {
            theme = saved;
        } else {
            theme = "default";
        }
        applyTheme();
    });
</script>

<div
    class="h-screen flex flex-col gap-4 fixed w-full bg-linear-to-r from-white to-blue-50/50"
>
    <div class="h-15 px-8 flex justify-between items-center">
        <span class=" text-blue-900 text-2xl flex items-center">EXASHARP</span>
        <span class="flex gap-2 items-center cursor-pointer">
            <span
                class="h-10 w-10 rounded-full transition-all duration-100 hover:bg-blue-100 justify-center items-center flex"
            >
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
            <div use:clickOutside={() => ((usercontrol = false))}
                class="flex relative items-center transition-all duration-100 h-10 w-10"
            >
                
                <button
                    class="p-1 hover:bg-blue-100 rounded-full cursor-pointer"
                    on:click={() => usercontrol = !usercontrol}
                    on:keydown={(e) => e.key === 'Enter' && (usercontrol = !usercontrol)}
                    type="button"
                    aria-label="Toggle user controls"
                >
                    <img class="rounded-full" src="sadik.jpg" alt="User profile" />
                </button>
                <div
                    class="absolute top-11 flex flex-col gap-1 right-0 w-54 border border-blue-100 bg-white shadow-sm rounded-xl p-1.5 text-sm {usercontrol ? '' : 'hidden'}"
                >
                    <div
                        class="py-1.5 px-2 justify-between rounded-lg flex items-center gap-2 bg-blue-800/4 text-blue-900 hover:bg-blue-400/10"
                    >
                        <div><span class="text-sm">Sadik Ahsan</span> <br />Managing Director</div>
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
                        class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10"
                    >
                        Help center
                    </div>
                    <div
                        class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10"
                    >
                        Settings
                    </div>
                    
                                        <div
                        class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10"
                    >
                        Log out
                    </div>
                    <hr class="text-gray-100 mx-1.5">
                                                            <div
                        class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10"
                    >
                        Release notes
                    </div>
                                                            <div
                        class="py-1.5 px-2 rounded-lg flex items-center gap-2 hover:bg-blue-400/10"
                    >
                        Terms & policies
                    </div>
                </div>
            </div>
        </span>
    </div>
    <div class="flex-1 flex gap-1">
        <div class="w-68 h-full flex flex-col px-5 gap-2">
            <div
                class="bg-blue-400/10 cursor-pointer text-blue-800 px-3 py-1.5 rounded-lg transition-all duration-100"
            >
                Dashboard
            </div>
            <div
                class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100"
            >
                Manage Employees
            </div>
            <div
                class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100"
            >
                Attendance
            </div>
            <div
                class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100"
            >
                Notices
            </div>
            <div
                class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100"
            >
                Policies
            </div>
        </div>

        <div
            class="h-full flex-1 bg-white/10 dark:bg-gray-600/85 dark:text-white p-10 mr-5"
        >
            make it the main section
            <slot />
        </div>
    </div>
    <div class="h-10 bg-black/50 px-8 items-center hidden"></div>
</div>
