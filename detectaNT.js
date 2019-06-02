function detectaNT() {
var num_NT=0;
var ls_NT1=[num_NT];
var x = document.getElementById("myTextarea").value;
var n = x.indexOf("[");

if (n==-1){var error = "Falta indicador"; document.getElementById("demo").innerHTML = error;}
else {var res = x.substr(n+1);
    m =  res.indexOf("]",1)
    if (m !=-1){
    var i=0;
    var character='';
    while (i <= res.length){
      character = res.charAt(i)

          if (character == character.toUpperCase() && res.charAt(i+1)=="]") {
              ls_NT1[num_NT]=character;
              num_NT++;
          }
          if (character == character.toLowerCase() && res.charAt(i-1)== "["&& res.charAt(i+1)== "]"){
              var error1 = "Los símbolos no terminales deben ser mayúsculas"; document.getElementById("demo").innerHTML = error1;
          }
                i++;
      }
    }
    if (m==-1){var error2 = "Falta cerrar corchetes"; document.getElementById("demo").innerHTML = error2;}
    }
    document.getElementById("demo2").innerHTML = ls_NT1;
}
