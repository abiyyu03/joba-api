const client = require('../config/database');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const registerUser = async (request, h) => {
	try {
		const { fullname, email, password, address, numberPhone, imageProfile, description } = request.payload;

		const id = nanoid(8);
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await client.query(
			`INSERT INTO users (u_id, fullname, email, pass, address, number_phone, image_profile, description) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *`,
			[id, fullname, email, hashedPassword, address, numberPhone, imageProfile, description],
		);

		return h
			.response({
				status: 'Success',
				message: 'User registered successfully !',
				data: user.rows[0],
			})
			.code(201);
	} catch (error) {
		return h.response(error.message);
	}
};

module.exports = registerUser;
