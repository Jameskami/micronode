var Hapi = require('hapi');
var serverRequest = require('request');
// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8082 
});

// Add the route
/*server.route({
    method: 'GET',
    path:'/app', 
    handler: function (request, reply) {
        reply('Welcome. Testing microservices.');
    }
});*/

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
server.register(require('inert'), function (err) {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/welcome',
        handler: function (request, reply) {
			body = 'user';
			serverRequest('http://localhost:8083/gateway', function (error, response, body) {
				console.log(body);
			})
            reply.file('index.html');
        }
    });
	server.route({
        method: 'GET',
        path: '/client.js',
        handler: function (request, reply) {
            reply.file('client.js');
        }
    });
});