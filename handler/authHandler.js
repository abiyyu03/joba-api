const { nanoid } = require('nanoid');
const data = require('../src/user');
// const jwt = require('jsonwebtoken');
// const users = [{ username: 'abiyyu', password: 'abiyyu' }];

const Bcrypt = require('bcrypt');
const Hapi = require('@hapi/hapi');

const users = {
	john: {
		username: 'john',
		password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm', // 'secret'
		name: 'John Doe',
		id: '2133d32a',
	},
};

const authenticateUser = async (request, username, password) => {
	const user = users[username];
	if (!user) {
		return { code: 401, credentials: null, isValid: false };
	}

	const isValid = await Bcrypt.compare(password, user.password);
	const credentials = { id: user.id, name: user.name };

	return { isValid, credentials };

	// try {
	// 	const user = users[username];
	// 	if (!user) {
	// 		return { credentials: null, isValid: false };
	// 	}

	// 	const isValid = await Bcrypt.compare(password, user.password);
	// 	const credentials = { id: user.id, name: user.name };

	// 	return { isValid, credentials };
	// } catch (error) {
	// 	return 'Invalid credentials';
	// }
};

// const login = (req, res) => {
// 	//jwt
// 	// const { username, password } = user;
// 	// const user = users.find((u) => u.username === username && u.password === password);
// 	// const secretKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// 	//     eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
// 	//     SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
// 	// if (user) {
// 	// 	const token = jwt.sign({ id: user.id, username: user.username, password: user.password }, secretKey);
// 	// 	return res.header('Authorization', `Bearer ${token}`);
// 	// } else {
// 	// 	return res.response('Invalid Credentials!').code(401);
// 	// }
// };

module.export = { authenticateUser };
