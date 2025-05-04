<script>
	import { onMount } from "svelte";

	let hour1;
	let hour2;
	let min1;
	let min2;
	let sec1;
	let sec2;

	function updateTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		const seconds = now.getSeconds().toString().padStart(2, "0");

		hour1.scrollTop = parseInt(hours[0]) * 200;
		hour2.scrollTop = parseInt(hours[1]) * 200;
		min1.scrollTop = parseInt(minutes[0]) * 200;
		min2.scrollTop = parseInt(minutes[1]) * 200;
		sec1.scrollTop = parseInt(seconds[0]) * 75;
		sec2.scrollTop = parseInt(seconds[1]) * 75;
	}

	onMount(() => {
		updateTime();
		setInterval(updateTime, 1000);
	});
</script>

<div id="root">
	<div class="rowOfNumbers" bind:this={hour1}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
	<div class="rowOfNumbers" bind:this={hour2}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
	<h1 id="colen">:</h1>
	<div class="rowOfNumbers" bind:this={min1}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
	<div class="rowOfNumbers" bind:this={min2}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
	<h1 id="thedot">.</h1>
	<div class="rowOfNumbersSec" bind:this={sec1}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
	<div class="rowOfNumbersSec" bind:this={sec2}>
		<h1>0</h1>
		<h1>1</h1>
		<h1>2</h1>
		<h1>3</h1>
		<h1>4</h1>
		<h1>5</h1>
		<h1>6</h1>
		<h1>7</h1>
		<h1>8</h1>
		<h1>9</h1>
	</div>
</div>

<style>
	#root {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	#colen {
		font-size: 200px;
		margin: 0;
	}

	#thedot {
		font-size: 75px;
		margin: 0;
		color: #585858;
	}

	.rowOfNumbers {
		display: flex;
		flex-direction: column;
		height: 200px;
		overflow-y: hidden;
		scroll-behavior: smooth;
	}

	.rowOfNumbers h1 {
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rowOfNumbers > h1 {
		font-size: 200px;
		margin: 0;
	}

	.rowOfNumbersSec {
		display: flex;
		flex-direction: column;
		height: 75px;
		overflow-y: hidden;
		scroll-behavior: smooth;
	}

	.rowOfNumbersSec h1 {
		height: 75px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rowOfNumbersSec > h1 {
		font-size: 75px;
		margin: 0;
		color: #585858;
	}
</style>
