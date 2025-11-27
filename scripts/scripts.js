$(function(){/*solo cuando todo se cargó*/
    $('#mail-container .modal-attack-message').on('click', function() {/*al pulsar en el botón*/
        open_modal_window("");/*llama la func*/
    });
    $("#modal-window .background").on("click", function(){/*cerrar modal-window (la pantalla de ataque)*/
		$(this).parent().hide();/*this - background, parent - modal-window, hide - esconder modal-window*/
	});
    $("#chat-content #main .message-content .modal-attack-message").on("click", function(){
		open_modal_window("");
	});
});

function create_message(){
    attackMessage = $("#mail-container #attack-message");/*invocar attack-message*/
    attackMessage.show();/*hacer que se vea (display:none al display:block)*/
    uploadMessagesSpan = $("#upload-messages-span");
    uploadMessagesSpan.text("1");/*cambiar 0 a 1 de "nuevos mensajes"*/
}

function open_modal_window(text){/*ventana de hackeado*/
    modalWindow = $("#modal-window");
    modalWindow.show();
}

