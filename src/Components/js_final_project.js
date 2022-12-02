//Main objectives:
//------------- DONE Create an input field for users to ask a question
//------------- Create a label for your input field telling your user to "Ask me anything!"
//------------- DONE  Create a div with an id of "answers" that you will insert the images into using js
//------------- DONE  Create an "ask" function that when clicked, will choose a random ball image and insert it into your "answers" div
// *******  Replace the input field with the user's question when displaying the answer
// Style your page any way you like
// Activate Github Pages for your project

//Setup values for file name
const files = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
//Generate random number from file names with min. of 0 and max of highest number in array.
function getRandomFile() {
  return Math.floor(Math.random() * files.length);
}
let input = "";
let myBall = "";
let askClick = 0;
let showClick = 0;
//Create and Select random Ball File
function randomBall() {
  const mypath = "/11day/img/";
  let myfile = getRandomFile();
  const myext = ".png";
  myBall = mypath + myfile + myext;
  const ball = document.createElement("img");
  return myBall;
}
// Called from Ask Me Anything Button
function myInput() {
  if (askClick === 0) {
    myBall = "/11day/img/1.png";
    const ball = document.createElement("img");
    ball.src = myBall;
    document.getElementById("answers").appendChild(ball);
    ball.setAttribute("height", "300");
    ball.setAttribute("alt", " Ball");
    input = document.createElement("input");
    input.setAttribute("id", "questions");
    input.setAttribute("type", "text");
    input.setAttribute("size", "70px");
    input.setAttribute("style", "font-size:18px");
    input.setAttribute("value", "Enter question here");
    input.setAttribute("onfocus", "this.value=''");
    document.getElementById("inputText").appendChild(input);
    askClick = 1;
    return 0;
  }
  return 0;
}
function showAnswer() {
  if (askClick === 1) {
    let userText = document.getElementById("questions").value;
    if (userText == "Enter question here") {
      alert("PLEASE ENTER A QUESTION");
      return 0;
    } else if (userText == "") {
      alert("PLEASE ENTER A VALID QUESTION");
      return 0;
    }
    const ball = document.createElement("img");
    randomBall();
    ball.src = myBall;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("answers").appendChild(ball);
    ball.setAttribute("height", "300");
    ball.setAttribute("alt", " Ball");
    document.getElementById("inputText").appendChild(input);
    askClick = 1;
    document.getElementById("questions").style.backgroundColor = "#0a1855";
    document.getElementById("questions").style.border = "0";
    document.getElementById("questions").style.color = "fff430";
    document.getElementById("questions").style.textAlign = "center";
    document.getElementById("questions").disabled = true;
  }
  return 0;
}
