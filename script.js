cadena = new String;
nvomsj = new String;

function codificar(){   
  nvomsj = "";
  cadena = (document.getElementById("input-texto").value).toLowerCase();
  for(i = 0 ; i< cadena.length; i++) {

      band = 0;
      if (cadena.charAt(i) == "e")
      {
        nvomsj = nvomsj + "enter"
        band = 1;
      }
      if (cadena.charAt(i) == "i")
      {
        nvomsj = nvomsj + "imes"
        band = 1;
      }
      if (cadena.charAt(i) == "a")
      {
        nvomsj = nvomsj + "ai"
        band = 1;
      }
      if (cadena.charAt(i) == "o")
      {
        nvomsj = nvomsj + "ober"
        band = 1;
      }
      if (cadena.charAt(i) == "u")
      {
        nvomsj = nvomsj + "ufat"
        band = 1;
      }
      if (band == 0){
        nvomsj = nvomsj + cadena[i] 
      }

    }
  document.getElementById("msg").value = nvomsj;
}

function descodificar(){

  cadena = (document.getElementById("input-texto").value).toLowerCase();
  let e = 0;
    do{
        
        cadena = cadena.replace("enter","e");
        cadena = cadena.replace("imes","i");
        cadena = cadena.replace("ai","a");
        cadena = cadena.replace("ober","o");
        cadena = cadena.replace("ufat","u");
        e = e + 1

      } while ( e < cadena.length);
  document.getElementById("msg").value = cadena;
}

function CopiarMsj() {

  var content = document.getElementById('msg');
  
  content.select();
  document.execCommand('copy');

  alert("Msj Copiado!");
}

var botonEncrip = document.querySelector('#btn-encriptar');
botonEncrip.addEventListener('click', codificar);
var botonDesEncrip = document.querySelector('#btn-desencriptar');
botonDesEncrip.addEventListener('click', descodificar);
var botonEncrip = document.querySelector('#btn-copy');
botonEncrip.addEventListener('click', CopiarMsj);