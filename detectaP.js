function detectaP(){
  detectaNT.call();
  var x = document.getElementById("myTextarea").value;
  var y=0,aux=0;
  y=x.indexOf("::=")+3 /*Inicio de lectura de producciones*/

  var producciones=[0];

  for (i=y;i<=x.length;i++){
    if (x[y] != "\n"){
    producciones[aux]=x[y]
    y++;
    aux++;
    }
    else if (x[y]== "\n"){
      y=y+7;
    }
  }
  document.getElementById("demo3").innerHTML = producciones;
}
