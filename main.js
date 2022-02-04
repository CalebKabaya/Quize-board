function mySubbmitButton(){
    // document.write("hey there");
 var score = 0;
 var currentAnswer = document.Questions.question1.value;
 var currentAnswer = document.Questions.question2.value;
 var currentAnswer = document.Questions.question3.value;
 var currentAnswer = document.Questions.question4.value;
 var currentAnswer = document.Questions.question5.value;

 if (currentAnswer ==22){score+=10};
 document.write(score);

}