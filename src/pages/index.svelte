<script>
    import { metatags } from '@roxi/routify';
    import DateTime from "../components/DateTime.svelte";
    import Main from "../components/Main.svelte";

    metatags.title = "startpage";
    metatags.description = "Custom browser startpage";
</script>

<main>
    <DateTime />
    <Main />
</main>