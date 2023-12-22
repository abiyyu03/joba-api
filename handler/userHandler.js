const { nanoid } = require('nanoid');
const client = require('../config/database');
const bcrypt = require('bcrypt');
const errorResponse = require('../constant/responseMessage');

// Fungsi untuk mendapatkan semua data
const getAll = async (request, h) => {
	try {
		const result = await client.query('SELECT * FROM users');
		return h.response({
			status: 'Success',
			data: result.rows,
		});
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

// Fungsi untuk memperbarui data
const updateData = async (request, h) => {
	const { fullname, email, address, number_phone } = request.payload;
	const { id } = request.params;

	try {
		// Enkripsi password baru
		// const hashedPassword = await bcrypt.hash(password, 10);

		// Perbarui data pengguna di database
		const result = await client.query(
			'UPDATE users SET fullname = $1, email = $2, address = $3, number_phone=$4 WHERE u_id = $5 RETURNING *',
			[fullname, email, address, number_phone, id],
		);

		return h.response({
			status: 'Success',
			message: 'User berhasil diperbarui',
			data: result.rows[0],
		});
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

// Fungsi untuk menghapus data
const deleteData = async (request, h) => {
	const { id } = request.params;

	try {
		// Hapus pengguna dari database
		const result = await client.query('DELETE FROM users WHERE u_id = $1 RETURNING *', [id]);

		return h.response({
			status: 'Success',
			message: 'User berhasil dihapus',
			data: result.rows[0],
		});
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};
const getById = async (request, h) => {
	try {
		const { id } = request.params;

		//delete data
		const dataById = await client.query(`SELECT * FROM users WHERE u_id = $1`, [id]);

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

module.exports = { getAll, updateData, deleteData, getById };
