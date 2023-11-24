const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

const { authenticateUser } = require('./handler/authHandler');

const init = async () => {
	//database configuration
	const client = new Client({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT,
	});

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

	await server.register(require('@hapi/basic'));
	server.auth.strategy('simple', 'basic', { authenticateUser });
	server.auth.default('simple');

	server.route(routes);
	await server.start();
	console.log(`Server is running at ${server.info.uri}`);
};

init();
