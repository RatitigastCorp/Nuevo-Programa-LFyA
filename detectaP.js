function detectaP(){
  detectaNT.call();
  var x = document.getElementById("myTextarea").value;
  var y=0,aux=0,aux2=0;
  y=x.indexOf("::=")+3 /*Inicio de lectura de producciones*/

  var producciones=[0];
  var arrProd=new Array(this.ls_NT1);

  for (i=y;i<=x.length;i++){
    if (x[y] != "\n"){
    producciones[aux]=x[y]
    y++;
    aux++;
    }
    else if (x[y]== "\n"){
      arrProd[aux2]=Pterminales(producciones,aux2);
      aux2++;
      y=y+7;
      producciones=[];
    }
  }
//
  var i=0;
  document.getElementById("demo2").innerHTML = "Lista de producciones: ";
  for (i=0;i<=ls_NT1.length;i++){NT_Terminales(arrProd,i);}
return arrProd
}
