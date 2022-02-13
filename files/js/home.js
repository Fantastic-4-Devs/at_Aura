$('#angry').click(function(){
    window.location = "files/angry.html";
})

$('#sad').click(function(){
    window.location = "files/sad.html";
})

$('#neutral').click(function(){
    window.location = "files/neutral.html";
})

$('#happy').click(function(){
    window.location = "files/happy.html";
})

$('#form').click(function(){
    window.location = "files/form.html";
})
const typSpd = 70; 
const waitTime = 500;

const text = [
  "Hi I'm your mental health buddy Aura",
  "I will take care of you!",
  "So...",
  "How are you feeling today?"
]

var mi = 0;

function writeString(e, str, i) {
  e.innerHTML = e.innerHTML + str[i];
  
  if (e.innerHTML.length == str.length && mi != text.length)
    setTimeout(slowlyDelete, waitTime, e);
}

function deleteString(e) {
  e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);
  
  if (e.innerHTML.length == 0)
    slowlyWrite(e, text[mi++]);
}

function slowlyDelete(e) {
  for (var i = 0; i < e.innerHTML.length; i++) {
    setTimeout(deleteString, typSpd / 2 * i, e);
  }
}

function slowlyWrite(e, str) {
  for (var i = 0; i < str.length; i++) {
    setTimeout(writeString, typSpd * i, e, str, i);
  }
}

const msg = document.querySelector(".msg-icn");

slowlyDelete(msg);