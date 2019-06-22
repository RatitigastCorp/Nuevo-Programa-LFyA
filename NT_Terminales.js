var NT_Terminales = function(arrProd,cont){

      var prodActual = arrProd[cont][0];
      var newP = document.createElement("P");
      newP.innerHTML=prodActual;
      document.getElementById("demo3").appendChild(newP);

      var origen = 0,checkT=0,i=0;
      var tamProd = prodActual.length;
      var ultimoOR = arrProd[cont][0][tamProd]
      var ls_NT1_1 = [0];
      while (i<=tamProd){
        var primerOr = prodActual.indexOf('|',origen)

          elemProd = arrProd[cont][0][primerOr-1]
          if (elemProd == elemProd.toLowerCase() ){
            checkT++;
          }
          if (elemProd == arrProd[cont][0][0] || elemProd == '|') {
            origen++;//Bajo esta condición siempre habrá que cambiar el origen para encontrar el siguiente primerOr
            var sigOr = prodActual.indexOf('|',origen)
            if(checkT==(primerOr)){ls_NT1_1[i]=cont;}
            if(checkT==((sigOr-primerOr)-1)){ls_NT1_1[i]=cont;}
            checkT=0;
          }
          if (primerOr == -1){
            elemProd = arrProd[cont][0][tamProd-1]
            if (elemProd == elemProd.toLowerCase() ){
              checkT++;
            }
            if(elemProd == '|'){
              penOr=i;
              if(checkT==((tamProd-penOr)-1)){ls_NT1_1[i]=cont;}
              checkT=0;
            }
          }
          i++;
      }
      document.getElementById("demo4").innerHTML = "Lista NT produce T: " + primerOr;
}
