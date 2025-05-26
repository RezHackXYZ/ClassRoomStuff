import { supabase } from '$lib/supabase';

export async function validateGamePin(pin) {
	const { data, error } = await supabase
		.from('games')
		.select('gamepin')
		.eq('gamepin', Number(pin))
		.maybeSingle();

	return data !== null && !error;
}
