<script>
    import LinkItem from "./LinkItem.svelte";
</script>

<section id="main">
    <div>
        <ul>
            <li>
                <LinkItem
                    href="https://www.youtube.com/" 
                    img="/images/youtube.png" 
                    alt="Youtube"/>
            </li>
            <li>
                <LinkItem
                    href="https://github.com/JessebotX" 
                    img="/images/github.png" 
                    alt="Github"/>
            </li>
            <li>
                <LinkItem
                    href="https://gitlab.com/JessebotX" 
                    img="/images/gitlab.png" 
                    alt="Gitlab"/>
            </li>
        </ul>
        <ul>
            <li>
                <LinkItem
                    href="https://mail.protonmail.com/inbox" 
                    img="/images/protonmail.png" 
                    alt="ProtonMail"/>
            </li>
            <li>
                <LinkItem
                    href="https://mail.google.com/mail/u/0/#inbox" 
                    img="/images/gmail.png" 
                    alt="Gmail"/>
            </li>
            <li>
                <LinkItem 
                    href="https://www.nexusmods.com/"
                    img="/images/nexusmods.png"
                    alt="NexusMods"/>
            </li>
        </ul>
    </div>
</section>

<style>
    div {
        background-color: #0f0f0f;
        padding: 1rem;
    }

    ul {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>