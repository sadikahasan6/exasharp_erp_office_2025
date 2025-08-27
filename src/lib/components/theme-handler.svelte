<!-- src/lib/components/ThemeHandler.svelte -->
<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { get } from 'svelte/store';

  const applyTheme = (/** @type {string} */ mode) => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'default');
    root.classList.add(mode === 'default' ? 'default' : mode);
  };

  onMount(() => {
    const saved = localStorage.getItem('theme') || 'default';
    theme.set(saved);
    applyTheme(saved);

    theme.subscribe(applyTheme);
  });
</script>
