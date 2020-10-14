/** Crée Sum pour le maximum de la barre et nbr la valeur de remplissage
 * @constructor
 * @param  {} sum
 * @param  {} nbr
 */
var drawBar = function drawBar(sum, nbr) {
    this.sum = sum; 
    this.nbr = nbr; 
  };
  
  /** Fonction pour crée la progress bar
   */
  drawBar.prototype.bar = function () {
    var progressbar = document.createElement("progress");
    progressbar.value = this.nbr;
    progressbar.max = this.sum;
    progressbar.style.width = "100%"; 
    progressbar.style.height = "80px";
    document.body.appendChild(progressbar);
  };  

  var tab = new drawBar(100, 30);
  tab.bar();
  