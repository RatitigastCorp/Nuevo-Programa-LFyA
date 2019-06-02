function detectaNT() {
var num_NT=0;
var ls_NT1=[num_NT];
var x = document.getElementById("myTextarea").value;
var n = x.indexOf("[");
/*indexOf es una funcion que buscará en toda la cadena el símbolo [.
Si en alguna parte de la cadena existe el símbolo, regresará la posición
en donde se encontró.
En caso de que no exista, regresará el valor de -1*/
if (n==-1){var error = "Falta indicador"; document.getElementById("demo").innerHTML = error;}
else {var res = x.substr(n+1);/*La funcion substr extrae todos los caracteres a partir de la posición
  que se indique, en este caso después de que encuentra el caracter [*/
    m =  res.indexOf("]",1) /*Se verifica que existan los ]*/
    if (m !=-1){ /*En caso de que existan procedemos a identificar
      unicamente los simbolos no terminales generadores*/
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
