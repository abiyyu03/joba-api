/**
 * Workflow :
 * - user click bookmark button call createData handler
 */
const client = require('../config/database');

const getAll = async (request, h) => {
	//query
	const all = await client.query(`SELECT * FROM bookmarks`);
	return h
		.response({
			status: 'Success',
			message: 'Data fetched successfully',
			total: all.rows.length,
			data: all.rows,
		})
		.code(200);
};

const createData = async (request, h) => {
	const { postId, userId } = request.payload;

	const createdAt = new Date();
	console.log(createdAt);
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
};

const updateData = async (request, h) => {
	const { postId, userId } = request.payload;
	const { id } = request.params;

	const updatedAt = new Date().toISOString;

	//update data
	const update = await client.query(
		`UPDATE bookmarks SET post_id=$1, user_id=$2, updated_at=$3 WHERE id = $4 RETURNING *`,
		[postId, userId, updatedAt, id],
	);

	return h
		.response({
			status: 'Success',
			message: 'Data updated successfully !',
			data: update.rows[0],
		})
		.code(200);
};

const deleteData = async (request, h) => {
	const { id } = request.params;

	//delete data
	const deleted = await client.query(`DELETE FROM bookmarks WHERE id = $1 RETURNING *`, [id]);

	return h
		.response({
			status: 'Success',
			message: 'Data deleted successfully !',
			data: deleted.rows[0],
		})
		.code(200);
};

const getById = async (request, h) => {
	const { id } = request.params;

	//delete data
	const dataById = await client.query(`SELECT * FROM bookmarks WHERE id = $1`, [id]);

	return h
		.response({
			status: 'Success',
			message: `Data fetched successfully`,
			data: dataById.rows[0],
		})
		.code(200);
};

module.exports = { getAll, createData, updateData, deleteData, getById };
