const authenticateUser = require('../handler/authHandler');
const registerUser = require('../handler/registerHandler');

const auth = [
	{
		method: 'POST',
		path: '/login',
		config: { auth: false },
		handler: authenticateUser,
	},
	{
		method: 'POST',
		path: '/register',
		config: { auth: false },
		handler: registerUser,
	},
];

module.exports = auth;
