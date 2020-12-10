$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#arriba').fadeIn();
      } else {
          $('#arriba').fadeOut();
      }
  });
  $('#arriba').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
      return false;
  });

  $("#nuevoMensaje").click(function (e) {
    abrirOpciones("mensaje")
  });
  $(".responder").click(function (e) {
    var container = $(this).closest(".respuestas");
    var input = container.find(".respuesta").find("textarea");
    var user = $(this).closest(".user").find(".cod").html();
    input.val(input.val()+'>'+user+' ');
  });
});

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