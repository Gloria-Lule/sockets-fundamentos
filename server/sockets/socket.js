const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*   if (mensaje.usuario) {
              callback({
                  res: 'Todo salio Bien!'
              });
          } else {
              callback({
                  res: 'Todo salio MAL!!!'
              });

          } */
    })

    //Enviar info al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidos a esta aplicacion'
    })
})