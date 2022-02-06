function mySubbmitButton(){
 var score = 0;
 var currentAnswer1 = document.Questions.question1.value;
 var currentAnswer2 = document.Questions.question2.value;
 var currentAnswer3 = document.Questions.question3.value;
 var currentAnswer4 = document.Questions.question4.value;
 var currentAnswer5= document.Questions.question5.value;
 var results=document.getElementById("results");

// Business logic
 if (currentAnswer1 =="Hyper Text Markup Language"){score+=20};
 if (currentAnswer2 =="h1"){score+=20};
 if (currentAnswer3 =="alt"){score+=20};
 if (currentAnswer4 =="True"){score+=20};
 if (currentAnswer5 =="The World Web Consortium"){score+=20};
 Questions.style.display="none";
//  results.textContent= score;
if (score==100){
    results.textContent="your score is 100%. Congratulation! You Excellently passed The Test!";
}else if (score==80){
    results.textContent="your score is 100%. Congratulation! You passed!";
}else if (score==60){
    results.textContent="your score is 60%.You passed fairly!";
}else if (score==40){
    results.textContent="your score is 40%. You failed!. Please retake the test....";
}else if (score==20){
    results.textContent="your score is 20%. You failed!. Please retake the test.....";
}else {
    results.textContent="your score is 0. You failed!. Please retake the test.....";

}

}