var Pterminales = function(produccion,n_prod){
  var prod = produccion;
  var arrProd=new Array(n_prod);

  prod = prod.filter(function(dato){
  return dato != undefined
  });

  arrProd[n_prod]=prod;

  arrProd= arrProd.filter(function(dato){
  return dato != undefined
  });
  
  return arrProd
}
