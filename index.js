const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const path = require('path');
const { Pool, Client } = require('pg');

const init = async () => {
	//database configuration
	const client = new Client({
		user: 'postgres',
		host: '127.0.0.1',
		database: 'postgres',
		password: 'abiyyucakra99',
		port: 5432,
	});

	//connect to the database
	client.connect(function (err, res) {
		if (err) throw err;
		console.log('Postgres connection succeeded');
	});

	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);
	await server.start();
	console.log(`Server is running at ${server.info.uri}`);
};

init();
