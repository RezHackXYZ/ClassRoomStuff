import { MostUsedAnnouncements } from "./announcerData.svelte.js";

export function AddMostUsedAnnouncement(announcementText) {
	MostUsedAnnouncements.v.push(announcementText);
    localStorage.setItem("MostUsedAnnouncements", JSON.stringify(MostUsedAnnouncements.v));
}

export function DeleteMostUsedAnnouncement(announcementID) {
	if (confirm("Are you sure you want to delete this announcement?")) {
		MostUsedAnnouncements.v.splice(announcementID, 1);
		localStorage.setItem("MostUsedAnnouncements", JSON.stringify(MostUsedAnnouncements.v));
	}
}
