<script>
	import toast from "svelte-5-french-toast";
	import { supabase } from "$lib/supabase.js";

	import { QuestionsData, selectedQuestionIndex } from "./create.svelte.js";

	let files;

	export async function UpLoadFiles(file) {
		if (!file) {
			toast.error("Please select a file to upload first.");
			return;
		}

		const fileExt = file.name.split(".").pop();
		const fileName = `${Date.now()}.${fileExt}`;
		const filePath = `${fileName}`;

		const uploadPromise = supabase.storage.from("useruploadedcontent").upload(filePath, file);

		const result = await toast.promise(uploadPromise, {
			loading: "Uploading...",
			success: "Upload successful!",
			error: (error) => `Upload failed. ${error.message} Please try again.`,
		});

		if (result.error) {
			toast.error("Upload error:" + result.error.message);
			return;
		}

		// Retrieve public URL
		const { data: publicData } = supabase.storage
			.from("useruploadedcontent")
			.getPublicUrl(filePath);

		return publicData.publicUrl;
	}
</script>

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
				bind:value={QuestionsData.v[selectedQuestionIndex.v].questionText}
				class="input mt-1"
			/>
		</div>

		<div class="mt-3">
			<label for="TimeLimit" class="text-lg leading-0.5 text-gray-500">Time limit?</label>
			<select
				name="TimeLimit"
				id="TimeLimit"
				class="input mt-1"
				bind:value={QuestionsData.v[selectedQuestionIndex.v].timeLimit}
			>
				<option value={null}>infinite</option>
				<option value={5}>5 sec</option>
				<option value={10}>10 sec</option>
				<option value={15}>15 sec</option>
				<option value={30}>30 sec</option>
				<option value={60}>1 min</option>
				<option value={120}>2 min</option>
				<option value={300}>5 min</option>
			</select>
		</div>

		<div class="mt-3">
			<label for="QuestionType" class="text-lg leading-0.5 text-gray-500">Question type?</label>
			<select
				name="QuestionType"
				id="QuestionType"
				class="input mt-1"
				bind:value={QuestionsData.v[selectedQuestionIndex.v].type}
			>
				<option value="SingleAnswer">Single Answer</option>
			</select>
		</div>

		<div class="mt-3">
			<label for="AddSomeMedia" class="text-lg leading-0.5 text-gray-500">Add Some Media?</label>
			<input type="checkbox" bind:checked={QuestionsData.v[selectedQuestionIndex.v].hasMedia} />

			{#if QuestionsData.v[selectedQuestionIndex.v].hasMedia}
				<input
					type="file"
					class="sr-only"
					bind:files
					onchange={async () => {
						QuestionsData.v[selectedQuestionIndex.v].mediaURL = await UpLoadFiles(files[0]);
					}}
					accept="image/*,video/*"
				/>
				<label for="media-upload" class="btn dull mt-2 cursor-pointer">
					{QuestionsData.v[selectedQuestionIndex.v].mediaURL
						? "choose different file"
						: "upload files"}
				</label>
				<input
					id="media-upload"
					type="file"
					class="hidden"
					bind:files
					onchange={async () => {
						QuestionsData.v[selectedQuestionIndex.v].mediaURL = await UpLoadFiles(files[0]);
					}}
					accept="image/*,video/*"
				/>
			{/if}
		</div>

		<div class="mt-3">
			{#if "SingleAnswer" === "SingleAnswer"}
				<span class="text-lg leading-0.5 text-gray-500">Options</span>
				{#each QuestionsData.v[selectedQuestionIndex.v].options as Option, index}
					<div class="mt-1 grid grid-cols-1 gap-2">
						<div class="flex items-center gap-2">
							<input
								type="radio"
								name="options"
								class="ratio"
								value={index}
								bind:group={QuestionsData.v[selectedQuestionIndex.v].CorrectOption}
							/>
							<input type="text" placeholder="Option 1" bind:value={Option} class="input w-1/3" />
							<button
								class="btn slim dull"
								aria-label="Delete Option"
								onclick={() => {
									if (QuestionsData.v[selectedQuestionIndex.v].options.length <= 2) {
										toast.error("You need to have a minimum of 2 options");
									} else {
										QuestionsData.v[selectedQuestionIndex.v].options.splice(index, 1);
									}
								}}
							>
								<i class="nf nf-md-delete"></i>
							</button>
						</div>
					</div>
				{/each}
				<div class="flex justify-center">
					<button
						class="btn dull mt-2 w-fit"
						onclick={() => {
							if (QuestionsData.v[selectedQuestionIndex.v].options.length >= 8) {
								toast.error("You can only have a max of 8 options");
							} else {
								QuestionsData.v[selectedQuestionIndex.v].options.push("");
							}
						}}>Add Option</button
					>
				</div>
			{/if}
		</div>
	</div>
	<div>
		<div class="mt-4">
			<label for="QuetionText" class="text-lg leading-0.5 text-gray-500">Danger</label>
			<button
				class="btn dull mt-1 w-full"
				onclick={() => {
					if (QuestionsData.v.length <= 1) {
						toast.error("You need to have at least 1 question");
					} else if (confirm("Are you sure you want to delete this question?")) {
						QuestionsData.v.splice(selectedQuestionIndex.v, 1);
						selectedQuestionIndex.v = Math.max(0, selectedQuestionIndex.v - 1);
						toast.success("Question deleted successfully");
					}
				}}>delete this question</button
			>
		</div>
	</div>
</div>
