import { MostUsedAnnouncements } from "./announcerData.svelte.js";

export function LoadMostUsedAnnouncement() {
	let TempMostUsedAnnouncements = JSON.parse(localStorage.getItem("MostUsedAnnouncements")) || "";

	if (TempMostUsedAnnouncements == "") {
		MostUsedAnnouncements.v = ["Please be quiet"];
		localStorage.setItem("MostUsedAnnouncements", JSON.stringify(MostUsedAnnouncements.v));
	} else {
		MostUsedAnnouncements.v = TempMostUsedAnnouncements;
	}
}
