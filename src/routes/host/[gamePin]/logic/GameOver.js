import { supabase } from "$lib/supabase.js";

export async function GameOver(GamePin) {
	await supabase.from("games").update({ status: `completed` }).eq("gamepin", GamePin);

	window.location.replace("/results/" + GamePin + "?playerID=host-null");
}
