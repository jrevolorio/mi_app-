const boton = document.querySelector("#boton");
const numeroSecreto = 1555;
// const numeroSecreto = numeroAleatorio();
boton.addEventListener("click", () => {
  let input = document.querySelector("#numero").value
  const resultado = document.querySelector("#div-resultado");
  let existe = numeroExiste(input, numeroSecreto);
  var texto = existe.coincide || existe.existe ? existe.coincidencias+" numeros en posicion correta" : false;
  
  if (existe.existe && !existe.coincide){
    resultado.innerHTML = "hay una o mas coincidencias";
  } else if (existe.existe && existe.coincidencias>0){
    resultado.innerHTML = texto;
  }else{
    resultado.innerHTML = "No es el numero correcto";
  }
});



function numeroAleatorio(){
  return Math.floor(Math.random() * (9999 - 1000)) + 1000;
}
function numeroExiste(input, numero){
  numero = numero+"";
  input = input+"";
  var existe = false;
  var coincide = false;
  var coincidencias = 0;
  for (let i = 0; i < numero.length; i++) {
    if (input.includes(numero[i])){
      existe = true;
    }
    if (input[i] == numero[i]) {
      coincide = true;
      coincidencias++;
    }
  }
  return {
    "existe": existe,
    "coincide": coincide,
    "coincidencias": coincidencias
  };
}