<script>
	import { ShowSeconds } from "./main.svelte";
	import { onMount } from "svelte";

	let hour1;
	let hour2;
	let min1;
	let min2;
	let sec1;
	let sec2;
	let AmOrPm;

	function DecideScrool(Object, currentTime, legnth, LastZeroPos) {
		if (currentTime == 0) {
			if (Object.scrollTop != 0) {
				Object.scrollTop = LastZeroPos * legnth;
				setTimeout(() => {
					Object.scroll({
						top: 0,
						behavior: "instant",
					});
				}, 500);
			}
		} else {
			Object.scrollTop = currentTime * legnth;
		}
	}

	function updateTime() {
		const now = new Date();

		let hours = now.getHours().toString().padStart(2, "0");

		if (now.getHours() >= 12) {
			hours = (now.getHours() - 12).toString().padStart(2, "0");
			AmOrPm = "PM";
		} else {
			AmOrPm = "AM";
		}

		const minutes = now.getMinutes().toString().padStart(2, "0");
		const seconds = now.getSeconds().toString().padStart(2, "0");

		DecideScrool(hour1, parseInt(hours[0]), 200, 2);
		DecideScrool(hour2, parseInt(hours[1]), 200, 10);
		DecideScrool(min1, parseInt(minutes[0]), 200, 6);
		DecideScrool(min2, parseInt(minutes[1]), 200, 10);
		if (ShowSeconds) {
			DecideScrool(sec1, parseInt(seconds[0]), 75, 6);
			DecideScrool(sec2, parseInt(seconds[1]), 75, 10);
		}
	}

	onMount(() => {
		updateTime();
		setInterval(updateTime, 1000);
	});

	let TempLocalStorage = localStorage.getItem("ShowSeconds") || "";

	if (TempLocalStorage == "false") {
		ShowSeconds.v = false;
	}
</script>

<div id="root">
	<div id="wrap">
		<div id="time">
			<div class="rowOfNumbers" bind:this={hour1}>
				<h1>0</h1>
				<h1>1</h1>
				<h1>0</h1>
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
				<h1>0</h1>
			</div>
			<h1 id="HourMinDivider">:</h1>
			<div class="rowOfNumbers" bind:this={min1}>
				<h1>0</h1>
				<h1>1</h1>
				<h1>2</h1>
				<h1>3</h1>
				<h1>4</h1>
				<h1>5</h1>
				<h1>0</h1>
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
				<h1>0</h1>
			</div>
			{#if ShowSeconds.v}
				<h1 id="MinSecDivider">.</h1>
				<div class="rowOfNumbersSec" bind:this={sec1}>
					<h1>0</h1>
					<h1>1</h1>
					<h1>2</h1>
					<h1>3</h1>
					<h1>4</h1>
					<h1>5</h1>
					<h1>0</h1>
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
					<h1>0</h1>
				</div>{/if}
			<h1 id="AmOrPm">{AmOrPm}</h1>
		</div>
		<div id="date">
			<h2>
				{new Date().toLocaleString("en-US", { weekday: "short" })}
				{new Date().getDate()},
				{new Date().toLocaleString("en-US", { month: "short" })}
				{new Date().getFullYear()}
			</h2>
		</div>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
	}

	#wrap {
		background-color: #252525;
		padding: 20px 70px;
		border-radius: 20px;
	}

	#time {
		display: flex;
		justify-content: center;
		align-items: baseline;
		margin: -30px;
	}

	#HourMinDivider {
		font-size: 200px;
		margin: 0;
	}

	#MinSecDivider {
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

	.rowOfNumbersSec > h1 {
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

	#AmOrPm {
		font-size: 75px;
		margin: 0;
		margin-left: 30px;
		color: #585858;
	}

	h2 {
		margin: 0;
		font-size: 40px;
		color: #888;
		text-align: center;
	}
</style>
