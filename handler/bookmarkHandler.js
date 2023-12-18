/**
 * Workflow :
 * - user click bookmark button call createData handler
 */
const client = require('../config/database');
const errorResponse = require('../constant/responseMessage');

const getAll = async (request, h) => {
	try {
		const { userId } = request.params;
		const all = await client.query(
			`SELECT * FROM bookmarks 
            LEFT JOIN posts ON bookmarks.post_id = posts.id 
            LEFT JOIN users ON bookmarks.user_id = users.u_id WHERE bookmarks.user_id = $1`,
			[userId],
		);
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

const createData = async (request, h) => {
	try {
		const { postId, userId } = request.payload;

		const createdAt = new Date();
		const updatedAt = createdAt;

		//create data
		const create = await client.query(
			`INSERT INTO bookmarks (post_id, user_id, created_at, updated_at) VALUES($1, $2, $3, $4) RETURNING *`,
			[postId, userId, createdAt, updatedAt],
		);

		return h
			.response({
				status: 'Success',
				message: 'Data created successfully !',
				data: create.rows[0],
			})
			.code(201);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

const updateData = async (request, h) => {
	try {
		const { postId, userId } = request.payload;
		const { id } = request.params;

		const updatedAt = new Date().toISOString;

		//update data
		const update = await client.query(
			`UPDATE bookmarks SET post_id=$1, user_id=$2, updated_at=$3 WHERE id_bookmark = $4 RETURNING *`,
			[postId, userId, updatedAt, id],
		);

		if (update.rowCount <= 0) throw new Error(`Data dengan id ${id} tidak tersedia`);

		return h
			.response({
				status: 'Success',
				message: 'Data updated successfully !',
				data: update.rows[0],
			})
			.code(200);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

const deleteData = async (request, h) => {
	try {
		const { id } = request.params;

		//delete data
		const deleted = await client.query(`DELETE FROM bookmarks WHERE id_bookmark = $1 RETURNING *`, [id]);

		if (deleted.rowCount <= 0) throw new Error(`Data dengan id ${id} tidak tersedia`);

		return h
			.response({
				status: 'Success',
				message: 'Data deleted successfully !',
				data: deleted.rows[0],
			})
			.code(200);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

const getById = async (request, h) => {
	try {
		const { id } = request.params;

		//delete data
		const dataById = await client.query(`SELECT * FROM bookmarks WHERE id_bookmark = $1`, [id]);

		if (dataById.rowCount <= 0) throw new Error(`Data dengan id ${id} tidak tersedia`);

		return h
			.response({
				status: 'Success',
				message: `Data fetched successfully`,
				data: dataById.rows[0],
			})
			.code(200);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

module.exports = { getAll, createData, updateData, deleteData, getById };
