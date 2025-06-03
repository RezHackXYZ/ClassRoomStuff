export let players = $state({ v: [] });
export let Status = $state({ v: "lobby" });
export let questions = { v: {} };

export let currentQuestion = $state({ v: 0 });
export let totalQuetions = $state({ v: 3 });
export let PeopleAwnseredQ = $state({ v: 0 });
export let Totalplayers = $state({ v: 3 });

export let CurrentQuestionDetails = $state({ v: {} });

export let gamePin = $state({ v: "" });

export let timeLeft = $state({ v: 0 });
export let TotalTimeLeft = $state({ v: 0 });