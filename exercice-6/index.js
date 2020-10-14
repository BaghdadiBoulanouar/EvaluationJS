'use strict';

var checkPhoneNumber = function checkForm() {

}

checkPhoneNumber.prototype.run = function() {
    this.form();
}

checkPhoneNumber.prototype.form = function() {
    var f = document.createElement("form");
    //Entrée numéro form
    var l1 = document.createElement('label');
    l1.setAttribute('for',"name");
    l1.textContent = "Numéro de téléphone : ";
    var number = document.createElement("input"); 
    number.setAttribute('type',"tel");
    number.setAttribute('name',"number");
    //Appendchild numéro
    f.appendChild(l1);
    f.appendChild(number);
    //Button form
    var s = document.createElement("input"); 
    s.setAttribute('type',"button");
    s.setAttribute('value',"Verifier");
    //Appendchild submit
    f.appendChild(s);
    document.body.appendChild(f); //document.getElementsByTagName('body')[0].appendChild(f);
}


    var formCheck = new checkPhoneNumber();
    formCheck.run();

