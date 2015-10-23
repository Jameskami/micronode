var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8084 
});
var users = [{name: "Microman"}];
// Add the route
server.route({
    method: 'GET',
    path:'/user', 
    handler: function (request, reply) {
        reply(JSON.stringify(users[0]));
    }
});

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});