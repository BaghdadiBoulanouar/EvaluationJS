'use strict';

var Array = [];
var computeNotes = function computeNotes(Array) {
    this.Array = Array;
}

computeNotes.prototype.run = function() {
    this.form();
    //this.somme();
    //this.calculator();

}
computeNotes.prototype.form = function() {
    var f = document.createElement("form");
    //Entrée numéro form
    var l1 = document.createElement('label');
    l1.setAttribute('for',"name");
    l1.textContent = "Inserer les nombres ici : ";
    var number = document.createElement("input"); 
    number.setAttribute('type',"number");
    number.setAttribute('name',"number");
    //Appendchild numéro
    f.appendChild(l1);
    f.appendChild(number);
    //Button Somme
    var s1 = document.createElement("input"); 
    s1.setAttribute('type',"button");
    s1.setAttribute('value',"Somme");
    //Button Calculer
    var s2 = document.createElement("input"); 
    s2.setAttribute('type',"button");
    s2.setAttribute('value',"Calculer Moyenne");
    //Appendchild submit
    f.appendChild(s1);
    f.appendChild(s2);
    document.body.appendChild(f); //document.getElementsByTagName('body')[0].appendChild(f);
}


var form = new computeNotes(Array);
form.run();