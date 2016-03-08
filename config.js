module.exports =  {
  server: {
    url: "localhost",
    port: 8100,
    path: 'server',
    script: "server/server.js"
  },
  drupal: {
    url: "d7ng6.loc.192.168.1.157.xip.io",
    api: "api"
  },
  client: {
  	url: "localhost",
  	port: 8080,
  	path: 'client',
  	index: "client/index.html"
  },
  chokidar: {
    port: 8888
  }
};
