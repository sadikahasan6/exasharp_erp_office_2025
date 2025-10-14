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

<div class="h-screen fixed w-full dark:bg-[url('/pictures/bg-dark.jpg')] bg-[url('/pictures/bg.jpg')] bg-cover bg-center">
    <div class="h-10 bg-black/20 m-5 py-6 px-8 flex items-center rounded-2xl">
        <span class=" text-amber-50 text-2xl flex items-center">EXASHARP</span>
    </div>
    <div class="h-full flex pb-3 px-5 gap-5 ">
        <div class="h-fit w-64 bg-black/10 px-8 py-5 rounded-2xl">
            Make it sidebar <br>
            Make it sidebar <br>
            Make it sidebar <br>
        </div>
        <div class="h-fit flex-1 bg-white rounded-2xl p-10">
            make it the main section
            <slot/>
        </div>
    </div>
    
</div>
