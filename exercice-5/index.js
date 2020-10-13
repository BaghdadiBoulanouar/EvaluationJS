'use strict';

var checkForm = function checkForm() {

}

checkForm.prototype.run = function() {
  this.form();
  this.check();
}

checkForm.prototype.form = function() {
  //Create form
  var f = document.createElement("form");
  f.setAttribute('method',"post");
  f.setAttribute('action',"index.js");

  //NOM
  var div1 = document.createElement('div');
  var l1 = document.createElement('label');
  l1.setAttribute('for',"name");
  l1.textContent = "Nom : ";
  var nom = document.createElement("input"); 
  nom.setAttribute('type',"text");
  nom.setAttribute('name',"name");
  //Appendchild nom
  div1.appendChild(l1);
  div1.appendChild(nom);
  f.appendChild(div1);

  //PRENOM
  var div2 = document.createElement('div');
  var l2 = document.createElement('label');
  l2.setAttribute('for',"name");
  l2.textContent = "Prénom : ";
  var prenom = document.createElement("input"); 
  prenom.setAttribute('type',"text");
  prenom.setAttribute('name',"firstname");
  //Appendchild prenom
  div2.appendChild(l2);
  div2.appendChild(prenom);
  f.appendChild(div2);

  //EMAIL
  var div3 = document.createElement('div');
  var l3 = document.createElement('label');
  l3.setAttribute('for',"name");
  l3.textContent = "Email : ";
  var email = document.createElement("input"); 
  email.setAttribute('type',"email");
  email.setAttribute('name',"email");
  //Appendchild email
  div3.appendChild(l3);
  div3.appendChild(email);
  f.appendChild(div3);

  //PASSWORD
  var div4 = document.createElement('div');
  var l4 = document.createElement('label');
  l4.setAttribute('for',"name");
  l4.textContent = "Password : ";
  var password = document.createElement("input"); 
  password.setAttribute('type',"password");
  password.setAttribute('name',"password");
  //Appendchild password
  div4.appendChild(l4);
  div4.appendChild(password);
  f.appendChild(div4);

  //SUBMIT
  var s = document.createElement("input"); 
  s.setAttribute('type',"button");
  s.setAttribute('value',"Submit");
  s.setAttribute('onClick',"click()");
  //Appendchild submit
  f.appendChild(s);
  document.getElementsByTagName('body')[0].appendChild(f);
}

var formulaire = new checkForm();
formulaire.run();