const client = require('../config/database');
const errorResponse = require('../constant/responseMessage');

const getAll = async (request, h) => {
	try {
		const all = await client.query(`SELECT * FROM tipe_pekerjaan`);
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
		const { tipe } = request.payload;

		const createdAt = new Date();
		const updatedAt = createdAt;

		//create data
		const create = await client.query(
			`INSERT INTO tipe_pekerjaan (tipe, created_at, updated_at) VALUES($1, $2, $3) RETURNING *`,
			[tipe, createdAt, updatedAt],
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
		const { tipe } = request.payload;
		const { id } = request.params;

		const updatedAt = new Date();

		//update data
		const update = await client.query(
			`UPDATE tipe_pekerjaan SET tipe=$1, updated_at=$2 WHERE id_tipe = $3 RETURNING *`,
			[tipe, updatedAt, id],
		);

		if (update.rowCount <= 0) throw new Error(`Data dengan id ${id} tidak tersedia`);

		return h
			.response({
				status: 'Success',
				messages: 'Data updated successfully !',
				datas: update.rows[0],
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
		const deleted = await client.query(`DELETE FROM tipe_pekerjaan WHERE id_tipe = $1 RETURNING *`, [id]);

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
		const dataById = await client.query(`SELECT * FROM tipe_pekerjaan WHERE id_tipe = $1`, [id]);

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
