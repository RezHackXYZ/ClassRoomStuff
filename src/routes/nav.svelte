<script>
	import { page } from "$app/stores";

	let CurrentPage = $state();
	CurrentPage = $page.url.pathname;
	$effect(() => {
		CurrentPage = $page.url.pathname;
	});

	let details = {
		"/kahootclone": {
			title: "Quizlet Home",
			conformOnBack: null,
		},
		"/kahootclone/create": {
			title: "Create Quiz",
			conformOnBack: "Are you sure you want to go back? You will lose all currently entered Q&As.",
		},
		"/kahootclone/play": {
			title: "Play Quiz",
			conformOnBack: "Are you sure you want to leave the game? you wont be able to rejoin it.",
		},
		"/kahootclone/host": {
			title: "Host Quiz",
			conformOnBack: "Are you sure you want to leave the game? if you leave, the game will end.",
		},
		"/kahootclone/join": {
			title: "Join Quiz",
			conformOnBack: null,
		},
		"/kahootclone/results": {
			title: "Leaderboard of Quiz Played",
			conformOnBack: null,
		},
		"/wordle": {
			title: "Play wordle",
			conformOnBack:
				"Are you sure you want to leave the game? you will lose your current game progress.",
		},
		"/randomname": {
			title: "select a random name",
			conformOnBack: null,
		},
		"/announcer": {
			title: "Announcer something",
			conformOnBack: null,
		},
		"/IdleScreen": {
			title: "Time Table",
			conformOnBack: null,
		},
		"/flashcards": {
			title: "Flashcards",
			conformOnBack: null,
		},
	};

	import { OpenTab } from "./wordle/InfoAndSetings/main.svelte";
	import { Modal, Content, Trigger } from "sv-popup";
	import { colseModal, ShowSeconds } from "./IdleScreen/logic/TimeAndTableData.svelte.js";
	import EditTimetableDiv from "./IdleScreen/components/timetable/EditTimetable.svelte";
	import { TabOpen } from "./randomname/+page.svelte";
	import { resetDeck, stats } from "./flashcards/logic.svelte";
	import EditCards from "./flashcards/editCards.svelte";
</script>

<div class="mb-1 flex items-center justify-between rounded border-2">
	<button
		class="btn mini dull"
		onclick={() => {
			if (
				details[CurrentPage].conformOnBack == null
					? true
					: confirm(details[CurrentPage].conformOnBack)
			) {
				window.location.href = "../";
			}
		}}
	>
		<img
			src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4a82e0c815624c7786ca2a5addbcc74487da8940_group_8__2_.svg"
			class="h-6"
			alt=""
		/>Home
	</button>
	<span class="text-lg font-medium">
		{details[CurrentPage].title}
	</span>
	<div class="flex gap-2">
		{#if CurrentPage == "/wordle"}
			<button class="btn dull mini" onclick={() => OpenTab("WordLength")}>
				<i class="nf nf-md-arrow_expand_horizontal"></i>Change word length
			</button>
			<button class="btn dull mini" onclick={() => OpenTab("Stats")}
				><i class="nf nf-cod-graph"></i> Stats</button
			>
		{:else if CurrentPage == "/IdleScreen"}
			<button
				class="btn dull mini"
				onclick={() => {
					ShowSeconds.v = !ShowSeconds.v;
					localStorage.setItem("ShowSeconds", String(ShowSeconds.v));
				}}
			>
				{#if ShowSeconds.v}Disable Seconds{:else}Enable Seconds{/if}</button
			>
			<Modal big={true} close={colseModal.v}>
				<Content>
					<EditTimetableDiv />
				</Content>
				<Trigger>
					<button class="btn dull mini">Edit timetable </button>
				</Trigger>
			</Modal>
		{:else if CurrentPage == "/randomname"}
			<button class="btn dull mini" onclick={() => (TabOpen.v = true)}> Edit list of names </button>
		{:else if CurrentPage == "/flashcards"}
			<Modal>
				<Content>
					<EditCards />
				</Content>
				<Trigger>
					<button class="btn dull mini">Edit Decks</button>
				</Trigger>
			</Modal>
			<button class="btn dull mini" onclick={() => (stats.isDeckEmpty = true)}> Change Deck</button>
		{/if}
	</div>
</div>
