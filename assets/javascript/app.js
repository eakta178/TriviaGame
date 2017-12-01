
//add timer
window.onload = function() {

  $("#start").on("click", game.start);
};
var intervalId;
var clockRunning = false;
var resultText;



//create an object with Trivia questions and answers

var game = {
	time: 30,
	triviaQuestions : ["Question1?", "Question2?", "Question3?", "Question4?"],

	triviaAnswers : [["abc1", "efg1", "hij1", "klm1"],["abc2", "efg2", "hij2", "klm2"],["abc3", "efg3", "hij3", "klm3"],["abc4", "efg4", "hij4", "klm4"]],
  correctAnswers : ["efg1", "hij2", "abc3", "klm4"],
  imageAnswers : ['../images/Pokemon.png', '../images/Pokemon.png', '../images/Pokemon.png', '../images/Pokemon.png'],

  start: function() {

        if (!clockRunning) {
        var intervalId=setInterval(game.count,1000);
        clockRunning = true;

        game.showOptions(0,game.triviaQuestions[0]);
        

  }
},

  showOptions: function(ind,questionname) {
console.log(ind);
  	        //for (var i = 0; i < game.triviaQuestions.length; i++) {
              //$('#question').html(game.triviaQuestions[i]);
              $('#question').html(questionname);

        	      for (var j = 0; j < game.triviaAnswers[ind].length; j++) {
        
				        var optionBtn = $("<button>");

				        optionBtn.addClass("letter-button letter letter-button-color");

				        optionBtn.attr("data-option",game.triviaAnswers[ind][j]);
				        console.log(game.triviaAnswers[ind][j]);
                optionBtn.text(game.triviaAnswers[ind][j]);
               

				        $("#options").append(optionBtn);
                $("#options").append('<br>');
                // add wait until user selects a button
                // button click event to show the result
                $("#options").on('click', game.correctAnswer());
                setTimeout(game.start(), 3000);
                //move to next question
                game.showOptions(ind+1,game.triviaQuestions[ind+1]);

                ;
                

				      }
        	        	
        	        	
        	        	

        			
        	
        //}
        
  },

  correctAnswer: function(){
    //compare button click with results
    //save selection in a variable
    var savedSelection;
    if(savedSelection.indexOf(game.correctAnswers))
    {
      var n = game.correctAnswers.indexOf(savedSelection);
      resultText = "You are correct"
      $("#options").html(resultText);
      var imgURL = game.imageAnswers[n];

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      $("#options").append(image);

    }
    else
    {
      var n = indexOf(game.triviaQuestions);
      resultText = "You are NOT correct. Correct Answer is: ";
      var imgURL = game.imageAnswers[n];
      
      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);
      
      // Appending the image
      $("#options").append(image);
    }

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