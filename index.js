const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const client = require('./config/database');
const Jwt = require('hapi-auth-jwt2');
require('dotenv').config();

const init = async () => {
	//connect to the database
	client.connect(function (err, res) {
		if (err) throw err;
		console.log('Postgres connection succeeded');
	});

	const server = Hapi.server({
		port: process.env.APP_PORT,
		host: process.env.APP_HOST,
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	await server.register(Jwt);
	server.auth.strategy('jwt', 'jwt', {
		key: process.env.PRIVATE_KEY_JWT,
		validate: () => ({ isValid: true }),
		verifyOptions: {
			algorithm: ['HS256'],
		},
	});
	server.auth.default('jwt');

	server.route(routes);
	await server.start();
	console.log(`Server is running at ${server.info.uri}`);
};

init();
