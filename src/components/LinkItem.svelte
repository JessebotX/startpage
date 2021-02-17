<script>
    export let href;
    export let img;
    export let alt;
</script>

<a href={href}>
    <img src={img} alt={alt}>
</a>

<style>
    a {
        background-color: rgba(0,0,0,0.5);
        border-radius: 0.5rem;
        box-shadow: 0.5rem 0.5rem 1rem #000,
            -0.5rem -0.5rem 1rem rgba(0,0,0,0.5);
        display: inline-block;
        height: 64px;
        margin: 0.25rem;
        padding: 1rem;
        text-decoration: none;
        transition: 0.15s ease-in-out;
    }

    a:hover {
        background-color: #000;
    }

    a:active {
        box-shadow: none;
        transform: translateY(0.25rem);
    }

    img {
        max-width: 32px;
        max-height: 32px;
        height: auto;
        width: 100%;
    }
</style>