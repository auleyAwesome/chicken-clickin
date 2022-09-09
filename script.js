let name = prompt(alert('Hello! What is your name?'));

function clickChick() {
    alert(`Stop clickin\' that chicken, ${name}!`);
}

var h2 = document.createElement('h2');
h2.innerText = 'Type into the field below to make this text change';
var input = document.createElement('input');

function addInputBox() {
input.setAttribute('type', 'text');
document.body.appendChild(h2);
document.body.appendChild(input);
}

input.addEventListener('change', function() {
    h2.innerText = input.value;
})



