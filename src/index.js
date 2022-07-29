import cipher from "./cipher.js";
//acceso al Dom
let startCifrator = document.getElementById("startCifrator");
startCifrator.addEventListener("click", function comenzar() {
  const bienvenida = document.getElementById("bienvenida");
  const CipherPage = document.getElementById("CipherPage");
  bienvenida.style.display = "none";
  CipherPage.style.display = "block";
});

//CONFIGURA EL BOTON QUE REGRESA A LA PAGIA DE INICIO
let btnReturn = document.getElementById("Return");
btnReturn.addEventListener("click", function regresar() {
  const bienvenida = document.getElementById("bienvenida");
  const CipherPage = document.getElementById("CipherPage");
  bienvenida.style.display = "block";
  CipherPage.style.display = "none";
  let mensaje = document.getElementById("TextToCipher");
  let mensajeCifrado = document.getElementById("cipherText");
  let offset = document.getElementById("offset");
  mensaje.value="";
  mensajeCifrado.innerHTML="";
  offset.value="";
});

let btndecode = document.getElementById("btn2");
btndecode.addEventListener("click", function (){
  let mensaje = document.getElementById("TextToCipher").value;
  let offset = document.getElementById("offset").value;
  offset = parseInt(offset);
  let mensajeCifrado = document.getElementById("cipherText");
  mensajeCifrado.innerHTML = cipher.decode(offset, mensaje);
});
//btndecode.addEventListener("click", showDecode);

//AQUÍ SE CONFIGURA BOTÓN QUE MUESTRA CIFRADO
let btncifrar = document.getElementById("btn1");
btncifrar.addEventListener("click", function() {
  let mensaje = document.getElementById("TextToCipher").value;
  let offset = document.getElementById("offset").value;
  offset = parseInt(offset);
  let mensajeCifrado = document.getElementById("cipherText");
  mensajeCifrado.innerHTML = cipher.encode(offset, mensaje);
});
//btncifrar.addEventListener("click", showEncode);
