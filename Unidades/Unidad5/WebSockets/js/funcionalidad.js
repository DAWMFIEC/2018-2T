/*https://developer.mozilla.org/en-US/docs/Web/API/WebSocket*/
var ws;

function conectar() {

    ws.name = $('#usuario').val()

    var msg = {
        type: "connect",
        name: ws.name
    };
    ws.send(JSON.stringify(msg));

    $("#usuario").attr('disabled', 'disabled');
    $("#conectar").attr('disabled', 'disabled');
}

function mensaje(evento) {
    
    var mensaje_recibido = jQuery.parseJSON(evento.data); 

    if (mensaje_recibido["type"] == 'connected') {

        ws.id = parseInt(mensaje_recibido["id"])

        usuario = mensaje_recibido["name"]
        content = "Estado: " + usuario +" está conectado"

        $('#mensajes').append($('<p></p>').append(content));
    }
    if (mensaje_recibido["type"] == 'resend') {

        var user = mensaje_recibido["name"]
        var text = decodeURI(mensaje_recibido["text"])

        var content = "["+user+"] "+text

        $('#mensajes').append($('<p></p>').append(content));
        $('#texto').val('');
    }
    if (mensaje_recibido["type"] == 'disconnected') {

        ws.id = parseInt(mensaje_recibido["id"])

        usuario = mensaje_recibido["name"]
        content = "Estado: " + usuario +" está desconectado"

        $('#mensajes').append($('<p></p>').append(content));
    }

}

function enviarMensaje() {

    var msg = {
        type: "message",
        text: encodeURI($('#texto').val()),
        name: ws.name,
        id: ws.id
    };

    ws.send(JSON.stringify(msg));

}

function crearWebSocket() {
    if ("WebSocket" in window) {
        // Let us open a web socket
        ws = new WebSocket("ws://localhost:9001/cliente_nuevo");

        ws.onopen = conectar;
        ws.onmessage = mensaje;

    } else {
        alert("Su navegador NO soporta WebSocket!");
    }
}

$(window).load(function() {

    $('#conectar').click(function() {
        crearWebSocket();
    })
    $('#enviar').click(function() {
        enviarMensaje();
    })

});