const h1 = document.querySelector("h1")
const input1 = document.getElementById("calculate1")
const input2 = document.getElementById("calculate2")
const btn = document.getElementById("btnCalculate")
const bOutcome = document.getElementById("outcome")
const form = document.getElementById("form")

//btn.addEventListener("click", btnOnclick);
// this addEventListener works with two argues, first is the evenet which will be attached like "click", "keydown", "submit", etc.
//Second one is the fuction that will be execute when the event which is sticked the addEventListener at this cases is a "click"

//function btnOnclick() {
    //const outcome = input1.value + input2.value;
   // const outcome = input1.value + " " + input2.value; 
    //bOutcome.innerHTML = "Outcome:" + outcome;  
//}

//form.addEventListener("submit", submitValues);

//function submitValues (event) {
  //  event.preventDefault();
    //const outcome = input1.value + input2.value;
   // const outcome = input1.value + " " + input2.value; 
    //bOutcome.innerHTML = "Outcome:" + outcome;  
//}
  // when we have a form to fill automaticilly JS takes the last botton like a sutmit a reload the page because it thinks something had been sending
  // then to solve this isssue we must to create first the variable and to choise how does it go to comunicate JS with HTML "Selector type", and we try to replicate same way as botton addeventlistener, but now to form (submit process).here we´ll have a little difference at the process, inside the function first the fuction goes to receive a argue which is a event owns of the addEventListener of form and we call it "event", then inside the function we call the methond of event which is preventDefault. It´s the method itself which is executing for default.

  btn.addEventListener("click", btnOnclick);
  
  function btnOnclick() {
    const outcome = input1.value + input2.value;
    //const outcome = input1.value + " " + input2.value; 
    bOutcome.innerHTML = "Outcome:" + outcome;  
} // This way is to keep the button fuction inside the submit method


