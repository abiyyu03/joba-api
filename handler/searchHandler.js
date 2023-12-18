const errorResponse = require('../constant/responseMessage');
const client = require('../config/database');

const searchPost = async (request, h) => {
	try {
		const { q } = request.query;

		const all = await client.query(`SELECT * FROM posts WHERE LOWER(title) LIKE LOWER('%${q}%')`);
		return h
			.response({
				status: 'Success',
				message: 'Data fetched successfully',
				total: all.rows.length,
				data: all.rows,
			})
			.code(200);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

module.exports = { searchPost };
