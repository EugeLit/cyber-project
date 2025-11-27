$(function(){
	$('[data-modal-window-img]').on('click', function() {/*al hacer click con el atributo data-modal-window-img*/
        imgSrc = $(this).attr("data-modal-window-img");/*conseguir el enlace (img/fa7-solid_book.svg) del atributo data-modal-window-img*/
		$("#modal-window-img .content").html(`<img src='${imgSrc}'>`);/*al contenido de modal-window-img poner la imágen imgSrc*/
		$("#modal-window-img").show();/*hacer aparecer la ventana modal*/
	});
	
	$("#modal-window-img .background").on("click", function(){/*al pulsar en el fondo*/
		$(this).parent().hide();/*hacer que se quite la ventana modal*/
	});
});