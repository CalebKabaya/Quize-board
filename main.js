function mySubbmitButton(){
    // document.write("hey there");
 var score = 0;
 var currentAnswer1 = document.Questions.question1.value;
 var currentAnswer2 = document.Questions.question2.value;
 var currentAnswer3 = document.Questions.question3.value;
 var currentAnswer4 = document.Questions.question4.value;
 var currentAnswer5= document.Questions.question5.value;

 if (currentAnswer1 =="Hyper Text Markup Language"){score+=20};
 if (currentAnswer2 =="h1"){score+=20};
 if (currentAnswer3 =="alt"){score+=20};
 if (currentAnswer4 =="True"){score+=20};
 if (currentAnswer5 =="The World Web Consortium"){score+=20};

 document.write(score);

}