<!-- some code inspired by https://svelte.dev/repl/clock?version=3.32.3 -->
<script>
    import { onMount } from "svelte";
    export let displayMilitary = false;
    export let displaySeconds = false;
    export let displayDayOfWeek = false;
    const min2Digits = num => num > 9 ? "" + num : "0" + num;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June", 
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const dayOfTheWeekNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let dt = new Date();
    $: fullHours = dt.getHours();
    $: h = displayMilitary ? min2Digits(dt.getHours()) : 
        dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours();
    $: m = min2Digits(dt.getMinutes());
    $: s = min2Digits(dt.getSeconds());
    $: year = dt.getFullYear();
    $: month = monthNames[dt.getMonth()];
    $: dayOfWeek = dayOfTheWeekNames[dt.getDay()];
    $: day = dt.getDate();
    onMount(() => {
        const interval = setInterval(() => dt = new Date(), 1000);
        return () => clearInterval(interval);
    });
</script>

<div id="datetime">
    <article>
        <section id="time">
            <h1>
                {h}:{m}{displaySeconds ? ":" + s : ""}
                {#if !displayMilitary}
                    {#if fullHours > 12}
                        PM
                    {:else}
                        AM
                    {/if}
                {/if}
            </h1>
        </section>

        <section id="date">
            {displayDayOfWeek ? dayOfWeek + "," : ""} {month} {day}, {year}
        </section>
    </article>
</div>

<style>
    div {
        align-items: flex-end;
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }
    section {
        text-align: center;
    }
    h1 {
        font-size: 3rem;
        margin: 0.2rem;
    }
</style>