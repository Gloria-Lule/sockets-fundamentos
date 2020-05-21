var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos Coneccion con  el servidor');
})

//Enviar info al server
socket.emit('enviarMensaje', {
    usuario: 'Gloria',
    mensage: 'Hola Mundo'
}, function(res) {
    console.log('Respuesta del server:', res);
})

//Escuchar info al server
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})