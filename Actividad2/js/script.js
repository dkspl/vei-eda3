function abrirOpciones(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
}
function w3_display(id) {
    var elemento=document.getElementById(id);
    if(elemento.style.display == 'none')
        elemento.style.display = 'block';
    else
        elemento.style.display = 'none';
}