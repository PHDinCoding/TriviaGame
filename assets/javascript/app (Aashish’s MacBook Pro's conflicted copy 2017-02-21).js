$(document).ready( function() {

	var questionsArray = [
		"Bill Murray had the fortune of acting with his three brothers in the movie Scrooged. Which of the following was not his brother?",
		"Directed by Tim Burton, the movie The Nightmare Before Christmas was adapted from what?",
		"What was the name of the famous song from the animation The Snowman?",
		"In the movie Cast Away, Chuck's family Christmas was interrupted by needing to go on an urgent business trip. Where was he being sent?",
		"In Elf, Will Ferrell starred in the lead role. But the role was originally intended for someone else. Who?",
		"Why was Charlie Brown feeling so depressed in A Charlie Brown Christmas?",
		"In the Finnish movie Rare Exports: A Christmas Tale, how was their Santa Claus different from the more traditional Santa?",
		"Santa Claus also appeared in which obscure science fiction movie?",
		"Edward Scissorhands was set in which time period?",
		"Which Christmas song opened the movie Lethal Weapon?",
		"How many separate stories appeared in the British Christmas romantic comedy Love Actually?",
		"In White Christmas, what was the name of Rosemary Clooney's character?",
		"Set over Christmas, the movie Trading Places had been likened to which Mark Twain novel?",
		"Who directed The Polar Express?",
		'Which Santa-centric movie featured the line: "ALL Neil told him was that Santa was more of a feeling. More of a state of mind than an actual person" ',
		"Which best-selling Christmas toy partly inspired the movie Jingle All the Way?",
		"Mogwai, the cute fluffy animal in the movie Gremlins, was a Christmas present found in which type of store?",
		"In The Muppet Christmas Carol, which character sang the song 'Chairman of the Board'?",
		"In the 1995 movie, Babe, what was the first name of the farmer, who was Babe's owner?",
		'Which Christmas movie featured the line: "Ho, ho, but no matter. Christmas was on its way. Lovely, glorious, beautiful Christmas, upon which the entire kid year revolved"'
		

		];

		var choicesOne = ['<button>',"<button>","<button>",,"<button>",];
		var choicesTwo = ["5","6","7","8"];
		
	for(var i = 0; i < questionsArray.length; i++){
		
		$("#test").append(questionsArray[i]+ '<br>');
		$("#test").append(choicesOne[0] +  " " + choicesOne[1] + choicesOne[2] + choicesOne[3] + '<br>');

		console.log(questionsArray[i]);

		// if(questionsArray[i] == 0){
		// 	$("#test").append(choicesOne[0] +  choicesOne[1] + choicesOne[2] + choicesOne[3] + '<br>');
		// }

	}
})
   
   

    // var start = setInterval(function(){ console.log(start}, 1000);




