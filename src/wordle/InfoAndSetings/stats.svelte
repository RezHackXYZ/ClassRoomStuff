<script module>
	import { newGame, WordLegnth } from "../logic.svelte.js";

	let data = {
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: [],
		10: [],
	};

	let LetersSelected = "5";

	let dataPoints = data[LetersSelected];

	import { onMount } from "svelte";
	import Chart from "chart.js/auto";

	let canvas;
	let chart;

	onMount(() => {
		const ctx = canvas.getContext("2d");
		chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: dataPoints.map((_, i) => `Game ${i + 1}`),
				datasets: [
					{
						label: "Number Of Guesses Taken to Win",
						data: dataPoints,
						borderColor: "rgba(75, 192, 192, 1)",
						backgroundColor: "rgba(75, 192, 192, 0.2)",
						fill: true,
						tension: 0.3,
					},
				],
			},
			options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	});

    
	export function SetdataTo(NewData) {
		data = NewData;
	}

	let Avgguesses = (
		dataPoints.reduce((acc, val) => acc + val, 0) / dataPoints.length
	).toFixed(2);
    
	let TotalWins = dataPoints.length;
</script>

<div id="root">
	<p>
		Stats For:
		<select
			bind:value={LetersSelected}
			onchange={() => {
				dataPoints = data[LetersSelected];
				if (chart) {
					chart.data.labels = dataPoints.map(
						(_, i) => `Point ${i + 1}`
					);
					chart.data.datasets[0].data = dataPoints;
					chart.update();
				}
				Avgguesses = (
					dataPoints.reduce((acc, val) => acc + val, 0) /
					dataPoints.length
				).toFixed(2);
				TotalWins = dataPoints.length;
				console.log(TotalWins);
				console.log(dataPoints);
			}}
		>
			<option value="3">3 Letters</option>
			<option value="4">4 Letters</option>
			<option value="5" selected>5 Letters</option>
			<option value="6">6 Letters</option>
			<option value="7">7 Letters</option>
			<option value="8">8 Letters</option>
			<option value="9">9 Letters</option>
			<option value="10">10 Letters</option>
		</select>
	</p>

	<div id="toprow">
		<div class="toprow">
			<h2>Total WINS</h2>
			<h1>{TotalWins}</h1>
		</div>
		<div class="toprow">
			<h2>Avg No. of guesses</h2>
			<h1>{Avgguesses}</h1>
		</div>
	</div>
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin: 10px;
		justify-content: center;
		background-color: #303030;
		padding: 10px;
		margin: 20px;
		border-radius: 10px;
	}
	h2,
	h1,
	p {
		text-align: center;
		margin: 0px;
	}

	h2 {
		font-size: 20px;
		color: #888;
	}

	#toprow {
		display: inline-flex;
		gap: 20px;
	}

	.toprow {
		background-color: #3f3f3f;
		border-radius: 10px;
	}

	.toprow:nth-child(1n) {
		min-width: 35%;
	}
	.toprow:nth-child(2n) {
		width: 100%;
	}
</style>
