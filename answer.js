var	results = document.getElementById('results');
results.style.display = 'none';

function showResult() {
	var total = 3,
			score = 0,
			answers =  ["a","d","a"];


	var q1 = document.forms['quizForm']['q1'].value;
	var q2 = document.forms['quizForm']['q2'].value;
	var q3 = document.forms['quizForm']['q3'].value;



	for(i=1; i<=total; i++) {
		if(eval('q'+i) == null || eval('q'+i) == '') {
			alert('You missed question #' + i);

			return false;
		}
	}

	for(i=1; i <= total; i++){
		if(eval('q'+i) == answers[i -1]){
				score++

		}
	}


	alert('Your Scored '+ score +' out of '+ total);

	return ;
}
