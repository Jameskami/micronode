var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8083 
});

// Add the route
server.route({
    method: 'GET',
    path:'/api', 
    handler: function (request, reply) {
        reply('Welcome. Testing microservices.');
    }
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});