<script>
    import Router from "svelte-spa-router";
    import Wordle from "./wordle/game.svelte";
    import TypeSelector from "./SelectionMenue/TypeSelector.svelte";
    import IdleScreen from "./IdleScreen/main.svelte";
    import RandomName from "./RandomName/main.svelte";
    import Announcer from "./announcer/main.svelte";

    let routes = {
        "/": TypeSelector,
        "/Wordle": Wordle,
        "/IdleScreen": IdleScreen,
        "/RandomName": RandomName,
        "/announcer": Announcer,
    };
</script>

<div id="root">
    <Router {routes} />
</div>

<style>
    :root {
        background-color: #121212;
        color: white;
    }

    #root {
        height: 100%;
        margin: 0;
        font-family: "Sour Gummy", sans-serif;
    }
</style>
