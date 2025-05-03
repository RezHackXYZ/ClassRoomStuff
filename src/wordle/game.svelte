<script>
    import Keyboard from "./keyboard.svelte";
    import Display from "./display.svelte";
</script>

<div id="root">
    <Display />
    <Keyboard />
</div>

<style>
    #root {
        width: calc(50% - 40px);
        height: calc(100% - 75px);
        border-radius: 20px;
        margin: 20px;
        margin-top: 5px;
        border: 2px solid #444;

        font-family: "JetBrains Mono", monospace;
    }
</style>