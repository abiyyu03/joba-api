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
				id_user: user.rows[0].u_id,
				fullname: user.rows[0].fullname,
				email: user.rows[0].email,
				address: user.rows[0].address,
				number_phone: user.rows[0].number_phone,
				description: user.rows[0].description,
			};
			const accessToken = jwt.sign(tokenPayload, process.env.PRIVATE_KEY_JWT, {
				expiresIn: '24h',
				algorithm: 'HS256',
			});

			return h.response({
				status: 'Success',
				message: 'Login Successfully !',
				userData: { tokenPayload, accessToken },
			});
		}
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

module.exports = authenticateUser;
