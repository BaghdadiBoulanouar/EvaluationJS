'use strict';

/**
 * Represents a function that checks if form field value is a palindrome.
 * @constructor
 */

var checkPalindrome = function checkPalindrome(){

}

/**
 * For to run the check.
 */

checkPalindrome.prototype.run = function(){
    this.form();
    this.check();
}

/**
 * This is the form.
 */

checkPalindrome.prototype.form = function(){
    var f = document.createElement("form");
    //Entrée value form
    var l1 = document.createElement('label');
    l1.setAttribute('for',"name");
    l1.textContent = "Mot à tester : ";
    var palindromevalue = document.createElement("input"); 
    palindromevalue.setAttribute('type',"text");
    palindromevalue.setAttribute('name',"palindrome");
    palindromevalue.setAttribute('value',"ressasser");
    //Appendchild numéro
    f.appendChild(l1);
    f.appendChild(palindromevalue);
    //Button form
    var s = document.createElement("input"); 
    s.setAttribute('type',"button");
    s.setAttribute('value',"Valider");
    //Appendchild submit
    f.appendChild(s);
    document.body.appendChild(f);
}


/**
 * Check if palindrome.
 */

checkPalindrome.prototype.check = function(){
    var button = document.querySelector('[type="button"]');
    button.addEventListener('click', event => { 
        var word = document.querySelector('[name="palindrome"]').value;
        var clean =  (word) => word.toLowerCase().replace(/[\W_]/g, '');
        var cleanWord = clean(word);

        for(var i = 0; i < cleanWord.length / 2; i++){
            if(cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]){
                alert(cleanWord + ' IS NOT a palindrome !');
                return false;
            }
        }
        alert(cleanWord + ' IS a palindrome !');
        return true;
    })
}

/**
 * Run
 */

var palindrome1 = new checkPalindrome();
palindrome1.run();