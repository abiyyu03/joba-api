const { tambahUser, lihatUser } = require('../handler/dataHandler');

const user = [
	{
		method: 'GET',
		path: '/users/{u_id}',
		handler: lihatUser,
	},
	{
		method: 'POST',
		path: '/users',
		handler: tambahUser,
	},
];

module.exports = user;
