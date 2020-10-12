var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

//NOM
var div1 = document.createElement('div');
var l1 = document.createElement('label');
l1.setAttribute('for',"name");
l1.textContent = "Nom : ";

var nom = document.createElement("input"); //input element, text
nom.setAttribute('type',"text");
nom.setAttribute('name',"username");

div1.appendChild(l1);
div1.appendChild(nom);
f.appendChild(div1);

//PRENOM
var div2 = document.createElement('div');
var l2 = document.createElement('label');
l2.setAttribute('for',"name");
l2.textContent = "Prénom : ";

var prenom = document.createElement("input"); //input element, text
prenom.setAttribute('type',"text");
prenom.setAttribute('name',"username");

div2.appendChild(l2);
div2.appendChild(prenom);
f.appendChild(div2);

//EMAIL
var div3 = document.createElement('div');
var l3 = document.createElement('label');
l3.setAttribute('for',"name");
l3.textContent = "Email : ";

var email = document.createElement("input"); //input element, text
email.setAttribute('type',"email");
email.setAttribute('name',"email");

div3.appendChild(l3);
div3.appendChild(email);
f.appendChild(div3);

//PASSWORD
var div4 = document.createElement('div');
var l4 = document.createElement('label');
l4.setAttribute('for',"name");
l4.textContent = "Password : ";

var password = document.createElement("input"); //input element, text
password.setAttribute('type',"password");
password.setAttribute('name',"password");

div4.appendChild(l4);
div4.appendChild(password);
f.appendChild(div4);


//SUBMIT
var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(s);

//and some more input elements here
//and dont forget to add a submit button

document.getElementsByTagName('body')[0].appendChild(f);