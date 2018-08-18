function parOuImpar(){
  var valor = document.getElementById('numero');
  if((valor.value % 2)==0){
    alert("numero "+valor.value+" é par!");
  } else {
    alert("numero "+valor.value+" é impar!");
  }
}
