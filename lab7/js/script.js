function init(){
//add your javascrip between these two lines of code
 
const alertMe = document.getElementById("entrybutton");
const input = document.getElementById("entryinput");
const output = document.getElementById("textoutput");

alertMe.addEventListener("click", function () {
  const words = input.value;
  output.textContent = words;
  alert("Karl:  " + words);
  });
}

window.addEventListener('load', init);
