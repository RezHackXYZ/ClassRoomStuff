import { supabase } from '$lib/supabase';

export async function createGame(questions, gamePin) {
	// Insert the game into the GAMES table
	const { data: gameData, error: gameError } = await supabase
		.from('games')
		.insert({
			creator: 'anonymous', // Replace with actual creator if available
			creationdate: new Date().toISOString(),
			status: 'lobby',
			GamePIN: gamePin
		})
		.select('id')
		.single();

	if (gameError) {
		alert('Failed to create game: ' + gameError.message + '\n\nPlease try again.');
		return;
	}

	const gameid = gameData.id;

	// Prepare questions and answers for batch insertion
	const questionsData = questions.map((q, index) => ({
		gameid: gameid,
		questionstext: q.name,
		correctanswer: q.correctAnswer
	}));

	const { data: questionsResult, error: questionsError } = await supabase
		.from('questions')
		.insert(questionsData)
		.select('id');

	if (questionsError) {
		alert('Failed to insert questions: ' + questionsError.message + '\n\nPlease try again.');
		return;
	}

	const answersData = [];
	questionsResult.forEach((question, index) => {
		questions[index].answers.forEach((answer, answerIndex) => {
			answersData.push({
				questionid: question.id,
				content: answer
			});
		});
	});

	const { error: answersError } = await supabase.from('answers').insert(answersData);

	if (answersError) {
		alert('Failed to insert answers: ' + answersError.message + '\n\nPlease try again.');
		return;
	}

	alert('Game created successfully!');
}
