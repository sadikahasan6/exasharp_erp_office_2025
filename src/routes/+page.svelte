<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let theme: "default" | "light" | "dark" = "default";

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
        applyTheme();
    });

    let typewriterElement: HTMLSpanElement | null = null;

    const words = [
        "EXASHARP is in build...",
        "Hope we can finish soon...",
        "Thanks for visiting...",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typewriterElement) return; // safety check

        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
            typewriterElement.textContent = currentWord.substring(0, charIndex);
        } else {
            charIndex++;
            typewriterElement.textContent = currentWord.substring(0, charIndex);
        }

        let delay = isDeleting ? 80 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    onMount(() => {
        typewriterElement = document.getElementById(
            "typewriter",
        ) as HTMLSpanElement;
        type();
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

    import { t } from "svelte-i18n";
    import { locale } from "svelte-i18n";
    import { fade, fly } from "svelte/transition";

    locale.set("bn"); // Switch to bangla
    const languages = [
        { code: "en", name: "English" },
        { code: "bn", name: "বাংলা" },
    ];
    var showDropdown = true;
</script>

<div
    class="relative w-full h-200 bg-[url(/pictures/oil-rig.jpg)] bg-cover p-10"
>
    <div
        class="z-40 transition backdrop-blur-none bg-white/20 dark:bg-black/40 gap-20 text-white/90 dark:text-white/80 w-fit h-10 sticky top-10 mx-auto rounded-full px-10 flex items-center"
    >
        <div class="text-xl text-amber-100 flex items-center">{$t('brand')}</div>
        <ul class="flex gap-10 items-center">
            <li><a href="/">{$t('services')}</a></li>
            <li><a href="/">Documentation</a></li>
            <li><a href="/">Download</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/">Sponsor</a></li>
            <li><a href="/">Sign in</a></li>
        </ul>
        <ul class="flex gap-8 items-center text-amber-100">
            <li class="flex items-center">
                <button on:click={toggleTheme} class="flex items-center">
                    {#if theme === "default"}
                        <Icon
                            icon="mynaui:circle-half-solid"
                            width="20"
                            height="20"
                        />
                    {:else if theme === "light"}
                        <Icon icon="solar:sun-bold" width="20" height="20" />
                    {:else}
                        <Icon
                            icon="icon-park-solid:dark-mode"
                            width="20"
                            height="20"
                        />
                    {/if}
                </button>
            </li>
            <li>
                <button
                    class="h-full flex items-center"
                    on:click={() => (showDropdown = !showDropdown)}
                    ><Icon icon="mdi:language" width="20" height="20" /></button
                >
                {#if showDropdown}
                    <ul in:fly={{ y: 10, duration: 200 }} out:fade={{duration:100}} class="absolute flex flex-col p-1 gap-2 top-10 bg-white/70 dark:bg-black/70 dark:text-white  shadow rounded-lg text-black  overflow-hidden">
                        {#each languages as { code, name }}
                            <li>
                                <button
                                    class=" px-3 py-1.5 hover:bg-gray-100/80 w-full transition rounded-lg text-start dark:hover:text-black"
                                    on:click={() => locale.set(code)}
                                    >{name}</button
                                >
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        </ul>
    </div>
    <div
        class=" flex flex-col w-200 mt-35 mx-auto gap-8 transition-opacity duration-700 ease-in-out"
        style="opacity: {opacity};"
    >
        <div class="text-5xl font-mono text-white relative">
            <span id="typewriter" class="border-r-4 border-white pr-1"></span>
        </div>
        <p class="text-white text-xl">
            {$t("welcome")}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci officia
            quas, aperiam animi delectus id officiis recusandae voluptatum in ex
            soluta? Corrupti, voluptas qui numquam nam hic maiores ad similique doloribus
            inventore itaque error sequi iusto molestiae beatae ex quae animi maxime
            aperiam culpa! Repellendus quam doloremque libero adipisci totam.
        </p>
        <div class="flex gap-5">
            <button
                class="w-fit cursor-pointer px-4 py-2 text-xl rounded-lg bg-white/70 dark:bg-black/70 dark:text-white"
                >Learn more</button
            >
            <button
                class="w-fit cursor-pointer px-4 py-2 text-xl rounded-lg dark:bg-white/70 bg-black/70 text-white dark:text-black"
                >Sign in</button
            >
        </div>
    </div>
</div>

<div class="dark:bg-zinc-800 dark:text-white transition p-10">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    veritatis laudantium maxime ullam ut quae? Nobis a ullam quaerat officiis
    magnam tempora, assumenda sit odit temporibus voluptatem eos libero sed quia
    accusamus optio eum animi, amet ex dolorum? Voluptate, voluptatibus saepe?
    Provident consectetur optio quibusdam quod enim necessitatibus laboriosam
    similique harum laborum tempora accusantium dolor dolore, deserunt suscipit
    quasi officiis expedita quaerat sed sunt rerum culpa accusamus totam
    doloremque beatae? Voluptatibus sequi vero eaque aliquam cupiditate quae
    recusandae repellat at dolorem animi suscipit rem et, officiis ut odio
    mollitia quis a nostrum! Nostrum ipsa ducimus doloribus similique dolorum
    labore corporis eaque, delectus distinctio consequuntur dolorem! Dignissimos
    minima quasi dolorem illo voluptatibus voluptas iusto consequatur saepe est
    eveniet animi provident dicta molestias, tenetur non. Debitis deleniti
    maxime voluptatem nihil explicabo, quam eligendi tempora in fugiat id
    placeat animi, accusantium rerum! Repellat iure repellendus, laboriosam quae
    iste, aliquam quos distinctio, quas ex ut eaque molestias officiis dolorem.
    Dolorem aperiam aut ullam quae sunt. Provident illo voluptate hic, deleniti
    labore distinctio numquam iste ducimus neque, necessitatibus, fugiat quos
    ipsa unde reprehenderit libero minima soluta autem excepturi mollitia nobis
    ipsam debitis dignissimos beatae totam. Sed voluptates quisquam corrupti
    nulla quo magnam molestias quas alias!
</div>

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
