import toast from "svelte-5-french-toast";
import { supabase } from "$lib/supabase.js";

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
		console.error("Upload error:", result.error.message);
		return;
	}

	// Retrieve public URL
	const { data: publicData } = supabase.storage.from("useruploadedcontent").getPublicUrl(filePath);

	toast.success(publicData.publicUrl);
}
