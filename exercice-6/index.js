'use strict';

var checkPhoneNumber = function checkForm() {

}

checkPhoneNumber.prototype.run = function() {
    this.form();
    this.check();

}
/**
 * Create form for enter phone Number
 */
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
/**
 * Function for check information of form
 */
checkPhoneNumber.prototype.check = function() {
    var button = document.querySelector('[type="button"]');
    var p = document.createElement('p');
    button.addEventListener('click', event => { 
        p.innerHTML = '';
        var checkPhoneNumber = RegExp(/^((\+)33|0|0033)[1-9](\d{2}){4}$/);
        var checkPhoneValue = document.querySelector('[name="number"]').value;
        //Conditions
        if(checkPhoneNumber.test(checkPhoneValue)){
            p.textContent = "Le numéro de téléphone est valide";
            p.style.color = "lime";
        }
        else{
            p.textContent = "Le numéro de téléphone est invalide";
            p.style.color = "crimson";
        }
        document.body.appendChild(p);
    })
}
    var formCheck = new checkPhoneNumber();
    formCheck.run();

