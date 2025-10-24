<script lang="ts">
    import { clickOutside } from "$lib/clickoutside";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let theme: "default" | "light" | "dark" = "default";
    let showDropdown = false;
    let menuToggle = false;

    import { t } from "svelte-i18n";
    import { locale } from "svelte-i18n";
    import { fade, fly } from "svelte/transition";

    const languages = [
        { code: "en", name: "English" },
        { code: "bn", name: "বাংলা" },
    ];

    function changeLanguage(code: string) {
        locale.set(code);
        document.cookie = `locale=${code}; path=/; max-age=31536000`; // for SSR
        if (browser) {
            localStorage.setItem("locale", code); // optional: keep for client
        }
        showDropdown = false;
    }

    // Apply theme based on selected mode
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

    // Cycle through: default → light → dark → default
    function toggleTheme() {
        if (theme === "default") {
            theme = "light";
        } else if (theme === "light") {
            theme = "dark";
        } else {
            theme = "default";
        }
        applyTheme();
    }

    // Initialize theme on mount
    onMount(() => {
        const saved = localStorage.theme;
        if (saved === "dark" || saved === "light") {
            theme = saved;
        } else {
            theme = "default";
        }

        showDropdown = false;
        menuToggle = false;
        applyTheme();
    });

    let typewriterElement: HTMLSpanElement | null = null;

    $: words = [$t("home_slogan_1"), $t("home_slogan_2"), $t("home_slogan_3")];

    import { onDestroy } from "svelte";
    import { browser } from "$app/environment";

    let typingTimeout: NodeJS.Timeout;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typewriterElement) return;
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentWord.substring(0, charIndex);

        let delay = isDeleting ? 80 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        typingTimeout = setTimeout(type, delay);
    }

    onMount(() => {
        typewriterElement = document.getElementById(
            "typewriter",
        ) as HTMLSpanElement;
        type();
    });

    onDestroy(() => {
        clearTimeout(typingTimeout);
    });

    let opacity = 1;

    const maxScroll = 400; // The scroll distance at which opacity becomes 0

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = 1 - scrollY / maxScroll;
        opacity = Math.max(0, Math.min(1, newOpacity)); // clamp between 0 and 1
    };

    onMount(() => {
        handleScroll(); // ensure correct opacity on load
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<div
    class="relative w-full h-200 bg-[url(/pictures/oil-rig.jpg)] bg-cover p-10 max-sm:p-5"
>
    <div
        class="z-40 transition backdrop-blur-none bg-white/20 max-xl:bg-white/90 dark:bg-black/40 max-xl:dark:bg-black/90 gap-20 text-white/90 max-xl:text-black dark:text-white/80 w-fit h-10 max-xl:h-auto sticky top-10 mx-auto rounded-full max-xl:rounded-3xl px-10 flex items-center max-xl:justify-between max-xl:w-full max-xl:flex-col max-xl:py-3"
        use:clickOutside={() => ((showDropdown = false), (menuToggle = false))}
    >
        <div
            class="flex justify-between items-center max-xl:w-full text-amber-100 max-xl:dark:text-amber-100 max-xl:text-amber-900"
        >
            <a href="/" class="text-xl flex items-center">{$t("brand")}</a>
            <button
                on:click={() => (menuToggle = !menuToggle)}
                class="w-fit xl:hidden"
            >
                <Icon icon="lucide:menu" width="24" height="24" />
            </button>
        </div>
        <div
            class="flex items-center h-full gap-20 max-xl:flex-col max-xl:font-medium max-xl:text-lg transition {menuToggle
                ? ''
                : 'max-xl:hidden'}"
        >
            <ul class="flex gap-10 items-center max-xl:flex-col max-xl:gap-5">
                <li><a href="/">{$t("services")}</a></li>
                <li><a href="/">{$t("documentation")}</a></li>
                <li><a href="/">{$t("download")}</a></li>
                <li><a href="/">{$t("news")}</a></li>
                <li><a href="/">{$t("community")}</a></li>
                <li><a href="/">{$t("sponsor")}</a></li>
                <li><a href="/">{$t("sign_in")}</a></li>
            </ul>
            <ul
                class="flex gap-8 items-center text-amber-100 max-xl:dark:text-amber-100 max-xl:text-amber-900"
            >
                <li class="flex items-center">
                    <button on:click={toggleTheme} class="flex items-center">
                        {#if theme === "default"}
                            <Icon
                                icon="mynaui:circle-half-solid"
                                width="20"
                                height="20"
                            />
                        {:else if theme === "light"}
                            <Icon
                                icon="solar:sun-bold"
                                width="20"
                                height="20"
                            />
                        {:else}
                            <Icon
                                icon="icon-park-solid:dark-mode"
                                width="20"
                                height="20"
                            />
                        {/if}
                    </button>
                </li>
                <li class="relative">
                    <button
                        class="h-full flex items-center"
                        on:click={() => (showDropdown = !showDropdown)}
                        aria-label="Change language"
                        on:keydown={(e) =>
                            e.key === "Escape" && (showDropdown = false)}
                        ><Icon
                            icon="mdi:language"
                            width="20"
                            height="20"
                        /></button
                    >
                    {#if showDropdown}
                        <ul
                            in:fly={{ y: 10, duration: 200 }}
                            out:fade={{ duration: 100 }}
                            class="absolute max-xl:-top-25 flex flex-col p-1 gap-2 top-10 bg-white/70 dark:bg-black/70 dark:text-white shadow rounded-lg text-black overflow-hidden"
                        >
                            {#each languages as { code, name }}
                                <li>
                                    <button
                                        class=" px-3 py-1.5 hover:bg-gray-100/80 w-full transition rounded-lg text-start dark:hover:text-black"
                                        on:click={() => changeLanguage(code)}
                                        >{name}</button
                                    >
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </li>
            </ul>
        </div>
    </div>
    <div
        class=" flex flex-col w-200 max-xl:w-auto max-sm:min-w-70 max-md:min-w-100 max-xl:min-w-140 absolute left-1/2 -translate-x-1/2 top-60 max-md:top-40 mx-auto gap-8 transition-opacity duration-700 ease-in-out"
        style="opacity: {opacity};"
    >
        <div
            class="text-5xl max-xl:text-4xl max-md:text-2xl max-sm:text-xl font-mono text-white relative"
        >
            <span id="typewriter" class="border-r-4 border-white pr-1"></span>
        </div>
        <p
            class="text-white text-xl max-xl:text-lg max-md:text-md max-sm:text-sm"
        >
            {$t("home_para")}
        </p>
        <div class="flex gap-5 md:text-xl">
            <button
                class="w-fit cursor-pointer px-4 py-2 rounded-lg bg-white/70 dark:bg-black/70 dark:text-white"
                >{$t("learn_more")}</button
            >
            <button
                class="w-fit cursor-pointer px-4 py-2 rounded-lg dark:bg-white/70 bg-black/70 text-white dark:text-black"
                >{$t("sign_in")}</button
            >
        </div>
    </div>
</div>

<div
    class="flex flex-col items-center md:flex-row dark:bg-zinc-800 dark:text-white transition px-15 py-15 gap-10"
>
    <!-- Left Image Section -->
    <div
        class="flex-1/3 bg-[url('/pictures/drawing.jpg')] bg-cover bg-center rounded-lg h-120"
    ></div>

    <!-- Right Text Section -->
    <div class="flex-2/3 ps-0 md:ps-20 max-lg:ps-10">
        <h1
            class="text-3xl md:text-5xl text-amber-900 dark:text-amber-400 leading-tight"
        >
            Make your business simple
        </h1>
        <p class="py-12 text-base md:text-lg leading-relaxed">
            Make your business simple with an online-based service system that
            centralizes operations, automates tasks, and reduces manual effort.
            It saves time, cuts costs, and boosts accuracy while improving
            customer satisfaction. By streamlining processes and enabling
            real-time insights, businesses can focus on growth, productivity,
            and sustainability in a competitive digital era.
        </p>

        <div class="flex gap-5 md:text-xl">
            <button
                class="w-fit cursor-pointer px-4 py-2 rounded-lg dark:bg-white/70 bg-black/70 text-white dark:text-black"
                >Visit our services</button
            >
        </div>
    </div>
</div>

<footer class="bg-zinc-900 text-gray-400 py-10 px-6 md:px-20">
    <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10"
    >
        <!-- Left Logo/Brand -->
        <div>
            <h2 class="text-white text-xl font-semibold">EXASHARP</h2>
            <p class="mt-2 text-sm max-w-xs">
                Simplifying your business with online-based solutions for growth
                and efficiency.
            </p>
        </div>

        <!-- Middle Links -->
        <div class="flex gap-16">
            <div>
                <h3 class="text-white font-semibold mb-3">Products</h3>
                <ul class="space-y-2">
                    <li><a href="/" class="hover:text-white">Services</a></li>
                    <li><a href="/" class="hover:text-white">Solutions</a></li>
                    <li><a href="/" class="hover:text-white">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white font-semibold mb-3">Company</h3>
                <ul class="space-y-2">
                    <li><a href="/" class="hover:text-white">About</a></li>
                    <li><a href="/" class="hover:text-white">Careers</a></li>
                    <li><a href="/" class="hover:text-white">Contact</a></li>
                </ul>
            </div>
        </div>

        <!-- Right Socials -->
        <div>
            <h3 class="text-white font-semibold mb-3">Follow Us</h3>
            <div class="flex gap-4 items-center">
                <a href="/" class="hover:text-white" aria-label="facebook"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        {...$$props}
                    >
                        <path
                            fill="currentColor"
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                        />
                    </svg></a
                >
                <a href="/" class="hover:text-white" aria-label="x"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 14 14"
                        {...$$props}
                    >
                        <g fill="none">
                            <g clip-path="url(#SVGG1Ot4cAD)">
                                <path
                                    fill="currentColor"
                                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                                />
                            </g>
                            <defs>
                                <clipPath id="SVGG1Ot4cAD">
                                    <path fill="#fff" d="M0 0h14v14H0z" />
                                </clipPath>
                            </defs>
                        </g>
                    </svg></a
                >
                <a href="/" class="hover:text-white" aria-label="youtube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...$$props}>
	<path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
</svg></a>
                <a href="/" class="hover:text-white" aria-label="instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...$$props}>
	<path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
</svg></a>
            </div>
        </div>
    </div>

    <!-- Bottom Note -->
    <div
        class="mt-10 border-t border-zinc-700 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center"
    >
        <p>© 2025 EXASHARP. All rights reserved.</p>
        <div class="flex gap-4 mt-2 md:mt-0">
            <a href="/" class="hover:text-white">Privacy</a>
            <a href="/" class="hover:text-white">Terms</a>
            <a href="/" class="hover:text-white">Cookies</a>
        </div>
    </div>
</footer>

<style>
    #typewriter {
        animation: blink-caret 1s step-end infinite;
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: white; /* Tailwind green-400 */
        }
    }
</style>
