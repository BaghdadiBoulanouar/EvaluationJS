var drawBar = function drawBar(sum, nbr) {
    this.sum = sum; 
    this.nbr = nbr; 
  };
  
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
  