(function() {
		var Question = function( q, answers, correctAnswer ) {
		this.q = q;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
	}

	Question.prototype.printAnswers = function() {
		console.log( this.q + '\n' );
		for(var i=0; i<this.answers.length; i++) {
			console.log( i + ': ' + this.answers[i] );
		}
	}

	Question.prototype.checkAnswer = function(a) {
		if(a == this.correctAnswer) {
			return true;
		}
		else {
			return false;
		}
	}

	var questions = [
		new Question('What is 1+1?', ['-2', '2', '7'], 1),
		new Question('Is a banana an animal?', ['yes', 'no'], 1),
		new Question('Is the earth flat?', ['yes', 'no'], 1),
		new Question('What is 2^5? (2 to the power of 5)', ['32', '64', '10'], 0),
		new Question('How big is the distance between the earth and the moon?', ['384.400 km', '149.600.000 km', '109.200.000 km'], 0)
	];

	var randomQuestion = Math.round(Math.random() * (questions.length - 1));
	questions[randomQuestion].printAnswers();

	var answer = prompt('Please type the number of the correct answer.');

	if(questions[randomQuestion].checkAnswer(answer)) {
		console.log('Correct Answer');
	}
	else {
		console.log('Incorrect Answer');
	}
})();