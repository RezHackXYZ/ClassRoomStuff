<div id="root">
	<h1>ClassRoomStuff</h1>
	<h2>
		A colection of awsome Tools, Games And more. Made to be used in any kind
		of classroom!
	</h2>
	<div id="items">
		<a href="#/Wordle">
			<button>
				<span class="front">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="50px"
						viewBox="0 -960 960 960"
						width="50px"
						fill="#FFFFFF"
						><path
							d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"
						/></svg
					>
					GAMES</span
				>
			</button></a
		>
	</div>
</div>

<style>
#root {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

	h1 {
		text-align: center;
		margin: 5px 0px;
		font-size: 50px;
	}

	h2 {
		text-align: center;
		margin: 5px 0px;
		color: #797979;
		font-size: 30px;
	}

	#items {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
		margin-top: 40px;
	}

	button {
		background: #292929;
		border-radius: 12px;
		border: none;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
	}

	.front {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		padding: 3px 30px;
		border-radius: 12px;
		font-size: 1.25rem;
		background: #4d4d4d;
		color: white;
		transform: translateY(-7px);
		transition: all 0.1s ease-in-out;
		font-family: "JetBrains Mono", monospace;
		font-size: 40px;
	}

	button:hover .front {
		transform: translateY(-10px);
	}

	button:active .front {
		transform: translateY(-3px);
	}
</style>
