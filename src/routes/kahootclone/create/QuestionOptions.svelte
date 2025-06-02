<div
	class="flex h-full w-[30%] flex-col justify-between gap-2 overflow-y-auto rounded-l border-2 p-3 pr-5"
>
	<div>
		<h1 class="text-4xl">Options</h1>

		<div class="mt-4">
			<label for="QuetionText" class="text-lg leading-0.5 text-gray-500">What the Question?</label>
			<input
				type="text"
				id="QuetionText"
				placeholder="Whats the capital of france?"
				class="input mt-1"
			/>
		</div>

		<div class="mt-3">
			<label for="TimeLimit" class="text-lg leading-0.5 text-gray-500">Time limit?</label>
			<select name="TimeLimit" id="TimeLimit" class="input mt-1">
				<option value={null}>infinite</option>
				<option value={5}>5 sec</option>
				<option value={10}>10 sec</option>
				<option selected value={15}>15 sec</option>
				<option value={30}>30 sec</option>
				<option value={60}>1 min</option>
				<option value={120}>2 min</option>
				<option value={300}>5 min</option>
			</select>
		</div>

		<div class="mt-3">
			<label for="QuestionType" class="text-lg leading-0.5 text-gray-500">Question type?</label>
			<select name="QuestionType" id="QuestionType" class="input mt-1">
				<option selected value="SingleAnswer">Single Answer</option>
			</select>
		</div>

		<div class="mt-3">
			{#if "SingleAnswer" === "SingleAnswer"}
				<span class="text-lg leading-0.5 text-gray-500">Options</span>
				<div class="mt-1 grid grid-cols-1 gap-2">
					<div class="flex items-center gap-2">
						<input type="radio" name="options" class="ratio" />
						<input type="text" placeholder="Option 1" class="input w-1/3" />
						<button class="btn slim dull" aria-label="Delete Option">
							<i class="nf nf-md-delete"></i>
						</button>
					</div>
				</div>
				<div class="mt-1 grid grid-cols-1 gap-2">
					<div class="flex items-center gap-2">
						<input type="radio" name="options" class="ratio" />
						<input type="text" placeholder="Option 2" class="input w-1/3" />
						<button class="btn slim dull" aria-label="Delete Option">
							<i class="nf nf-md-delete"></i>
						</button>
					</div>
				</div>
				<div class="mt-1 grid grid-cols-1 gap-2">
					<div class="flex items-center gap-2">
						<input type="radio" name="options" class="ratio" />
						<input type="text" placeholder="Option 3" class="input w-1/3" />
						<button class="btn slim dull" aria-label="Delete Option">
							<i class="nf nf-md-delete"></i>
						</button>
					</div>
				</div>
				<div class="flex justify-center">
					<button class="btn dull mt-2 w-fit">Add Option</button>
				</div>
			{/if}
		</div>
	</div>
	<div>
		<div class="mt-4">
			<label for="QuetionText" class="text-lg leading-0.5 text-gray-500">Danger</label>
			<button class="btn mt-1 dull w-full" >delete this question</button>
		</div>
	</div>
</div>
