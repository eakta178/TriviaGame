
//add timer
window.onload = function() {

  $("#start").on("click", game.start);
};
var intervalId;
var clockRunning = false;
var resultText;
var indx = 0;
var win=0;
var loss =0;
var noAns = 0;



//create an object with Trivia questions and answers

var game = {
	time: 30,
	triviaQuestions : ["What is the name of the main trainer in Pokemon?", "What is the name of the famous electric-type, yellow-coloured Pokémon that follows Ash around and refuses to enter a Poké ball?", "Who is Ash traveling with?", "This is a dark and ghost type Pokemon. It has jewels for eyes and razor sharp claws. It comes from the Hoenn region. Who's that Pokemon?"],

	triviaAnswers : [["Nidorino", "Pikachu", "Caterpie", "Ash"],["Nidorino", "Pikachu", "Caterpie", "Ash"],["Cilan", "Iris", "Iris and Cilan", "No One"],["Munchlax", "Charmander", "Sableye", "The Hairy Bug Pokemon"]],
  correctAnswers : ["Ash", "Pikachu", "Iris and Cilan", "Sableye"],
  imageAnswers : ['assets/images/Ashgiphy.gif', 'assets/images/Pikachugiphy.gif', 'assets/images/IrisCilangiphy.gif', 'assets/images/Sableyegiphy.gif'],

  start: function() {
      console.log('im inside start')
        if (!clockRunning) {
        var intervalId=setInterval(game.count,1000);
        clockRunning = true;

        game.showOptions(indx,game.triviaQuestions[indx]);
        

  }
},

  showOptions: function(ind,questionname) {
console.log(questionname);
  	        
              $('#question').html(questionname);
              var len =game.triviaAnswers[ind].length;

        	      for (var j = 0; j < len; j++) {
        
				        var optionBtn = $("<button>");

				        optionBtn.addClass("btn btn-primary option");

				        optionBtn.attr("data-option",game.triviaAnswers[ind][j]);
				        
                optionBtn.text(game.triviaAnswers[ind][j]);
               

				        $("#options").append(optionBtn);
                $("#options").append('<br>');

                
                
              }
              // add wait until user selects a button
              // button click event to show the result
              $(".option").on('click', function() {
                //save selection in a variable
                var savedSelection= $(this).text();
                game.correctAnswer(savedSelection);
                //reset timer
                game.reset();
                indx++;
                if(indx>=game.triviaQuestions.length){
                  setTimeout(game.stop(), 3000);
                  $('#start').text('Start Over?');
                  
                  $('#question').html('<h2>'+ 'All Done, Here is is how you did!!!'+'</h2>');
                  $('#options').html('<h3>'+ 'Correct Answers: '+ win +'<br>' +'</h3>');
                  $('#options').append('<h3>'+ 'Not Correct Answers: '+ loss +'<br>' +'</h3>')
                  $('#options').append('<h3>'+ 'Unasnswerd: '+ noAns +'<br>' +'</h3>')

                  $('#options').append('<br>'+ '<br>');
                  $("#start").on('click', function(){
                    game.restart();
                    game.start();
                  });

                }
                else{
                //move to next question
               
                console.log(indx);
                setTimeout(game.start(),3000);
                }
                
                
                });
		      	
               
  },

  correctAnswer: function(selectedOption){
    //compare button click with results
    console.log(selectedOption);
    
    if(game.correctAnswers.indexOf(selectedOption) != -1)
    {
      console.log('entered correct');
      win++;
      var n = game.correctAnswers.indexOf(selectedOption);
      console.log(n);
      resultText = "You are correct. The right answer is: "+ selectedOption;
      $("#options").html('<h2>'+ resultText + '</h2>');
      var imgURL = game.imageAnswers[n];
      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      $("#options").append(image);

    }
    else
    {
      loss++;
      console.log('entered incorrect');
      console.log(indx);
      resultText = "You are NOT correct. The right Answer is: "+ game.correctAnswers[indx];
      $("#options").html('<h2>'+ resultText + '</h2>');
      var imgURL = game.imageAnswers[indx];
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
        
	
  },

    stop: function() {
    console.log('i was inside stop')
    clearInterval(intervalId);
    clockRunning = false;
	 
  },

  restart: function(){
    indx = 0;
    win=0;
    loss =0;
    noAns = 0;
  },
  reset: function() {
    
    game.time=30;
    $("#display").text('Time remaining: '+ "00:00");

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