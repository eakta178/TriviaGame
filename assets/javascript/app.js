
//add timer
window.onload = function() {

  $("#start").on("click", game.start);
};
var intervalId;
var clockRunning = false;

$(document).ready(function () {
	$("button[name=start]").on('click', function (e) {
	$(this).off(e);
	$('td').on('click', function (e) {
	$(this).addClass('clicked').off(e);
		});
	});
});

//create an object with Trivia questions and answers

var game = {
	time: 30,
	triviaQuestions : ["Question1?", "Question2?", "Question3?", "Question4?"],

	triviaAnswers : [["abc1", "efg1", "hij1", "klm1"],["abc2", "efg2", "hij2", "klm2"],["abc3", "efg3", "hij3", "klm3"],["abc4", "efg4", "hij4", "klm4"]],


  start: function() {

        if (!clockRunning) {
        var intervalId=setInterval(game.count,1000);
        clockRunning = true;

        game.showOptions();

  }
},

  showOptions: function() {

  	        for (var i = 0; i < game.triviaQuestions.length; i++) {
        	$('#question').html(game.triviaQuestions[i]);

        	      for (var j = 0; j < game.triviaAnswers.length; j++) {
        
				        var optionBtn = $("<button>");

				        optionBtn.addClass("letter-button letter letter-button-color");

				        optionBtn.attr("data-option",game.triviaAnswers[i][j]);
				        console.log(game.triviaAnswers[i][j]);
				        optionBtn.text(game.triviaAnswers[i][j]);

				        $("#options").append(optionBtn);
				        $("#options").append('<br>');

				      }
        	        	// add wait until user selects a button
        	        	$(this).off(event)
        	        	

        			// button click event to show the result
        	
        }
        
  },

  correctAnswer: function(){
  	

  },

    count: function() {
    
	      game.time--;
	      var currentTime = game.timeConverter(game.time)

	      $("#display").html('Time remaining: '+ currentTime);
	      if (game.time === 0) {
	      console.log(currentTime);

	      	game.stop();
	      }
	      
  		
  		
  },

    stop: function() {

    clearInterval(intervalId);
    clockRunning = false;
	 
  },
    timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

 
};










//add logic to compare 



//