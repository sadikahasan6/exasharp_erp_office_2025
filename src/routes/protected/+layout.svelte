<script>
    import { onMount } from "svelte";

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
<div class="h-screen flex flex-col gap-4 fixed w-full bg-linear-to-r from-white to-blue-50/50">
    <div class="h-15 px-8 flex items-center">
        <span class=" text-blue-900 text-2xl flex items-center">EXASHARP</span>
    </div>
    <div class="flex-1 flex gap-1 ">
        <div class="w-68  h-full flex flex-col px-5 gap-2">
            <div class="bg-blue-400/10  cursor-pointer text-blue-800 px-3 py-1.5 rounded-lg transition-all duration-100">Home</div>
            <div class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100">About us</div>
            <div class="px-3 py-1.5 cursor-pointer hover:bg-blue-400/10 hover:text-black rounded-lg transition-all duration-100">Contact</div>
        </div>
        
        <div class="h-full flex-1 bg-white/10 dark:bg-gray-600/85 dark:text-white  p-10 mr-5">
            make it the main section
            <slot/>
        </div>
    </div>
    <div class="h-10 bg-black/50 px-8 items-center hidden">
        
    </div>
</div>

