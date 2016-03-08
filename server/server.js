const Hapi = require('hapi');
const server = new Hapi.Server();
const inert = require("inert");
const path = require('path');
const SERVER = require('../config.js').server;

server.connection({
  host: SERVER.url,
  port: SERVER.port
});

server.register(inert, (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/api',
    handler: (req, reply) => {
      reply('API called');
    }
  });


  //Routes
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: path.join(process.cwd(), 'dist'),
        listing: false,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/admin/{path*}',
    handler: {
      directory: {
        path: path.join(process.cwd(), 'server', 'adminlte'),
        listing: false,
        index: true
      }
    }
  });


  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log("Server started at", server.info.uri);
  });
});
