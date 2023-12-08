const { nanoid } = require('nanoid');
const client = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorResponse = require('../constant/responseMessage');
require('dotenv').config();

const authenticateUser = async (request, h) => {
	const { email, password } = request.payload;

	try {
		const user = await client.query(`select * from users where email = $1 `, [email]); // where email = $1 and pass = $2 ', [email, password]
		// setTimeout(() => {
		const isAuthenticated = await bcrypt.compare(password, user.rows[0].pass);
		// }, 3000);
		if (isAuthenticated) {
			const tokenPayload = {
				email: user.rows[0].email,
			};
			const accessToken = jwt.sign(tokenPayload, process.env.PRIVATE_KEY_JWT, {
				expiresIn: '2h',
				algorithm: 'HS256',
			});

			return h.response({
				status: 'Success',
				message: 'Login Successfully !',
				data: accessToken,
			});
		}
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

module.exports = authenticateUser;
