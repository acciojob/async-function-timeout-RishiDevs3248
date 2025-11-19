//your JS code here. If required.

const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


btn.addEventListener("click", async function () {
  let message = textInput.value;
  let delay = Number(delayInput.value);


  output.innerText = "";

 
  await wait(delay);


  output.innerText = message;
});