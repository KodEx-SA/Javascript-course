// changing paragraph text content
var $text = document.getElementById('paragraph');
$text.textContent = "Text content successfully changed!";
$text.style.color = "#0f0134";
$text.style.fontSize = "30px";
$text.style.textAlign = "center";

// adding a new html element
var el = document.createElement('p');
el.textContent = "Hello, World";
el.style.color = "#00f";
el.style.textAlign = "center"
el.style.fontSize = "3rem";
document.body.appendChild(el); // add the new element to DOM