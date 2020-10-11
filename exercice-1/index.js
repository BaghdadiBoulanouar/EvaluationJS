// FONCTIONS
var gridGenerator = function gridGenerator(xAxis, yAxis){
    var table = document.createElement("table");
        for (var i=0;i<xAxis;i++){
            var tr = document.createElement("tr");
            for(var j=0;j<yAxis;j++){
              var td = document.createElement("td");
               //td.insertAdjacentHTML("beforeend","<span>0</span>");
              tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
    
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function changeColor(className){
        setInterval( function() {
        var carre = document.querySelectorAll(className);
        length = carre.length;

        for(id = 0; id < length; id++){
            var couleur = getRandomColor();
            carre[id].style.backgroundColor = couleur;
        }
    }, 1000);

      var styleTable = document.querySelector("table");
      var styleTr = document.querySelector("tr");
      var styleTd = document.querySelector("td");
      styleTable.style.width = "80%";
      styleTable.style.height = "100vh";
    }
    
    //APPEL
    gridGenerator(10, 10);
    changeColor("td");