<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.png";
  import "$lib/i18n.js";
  import { locale } from "svelte-i18n";
  let { data, children } = $props();

  locale.set(data.lang);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Exasharp</title>
</svelte:head>

<div class="">
  {@render children?.()}
</div>
