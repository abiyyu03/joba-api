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
	const { fullname, email, password } = request.payload;
	const { id } = request.params;

	try {
		// Enkripsi password baru
		const hashedPassword = await bcrypt.hash(password, 10);

		// Perbarui data pengguna di database
		const result = await client.query(
			'UPDATE users SET fullname = $1, email = $2, pass = $3 WHERE u_id = $4 RETURNING *',
			[fullname, email, hashedPassword, id],
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

module.exports = { getAll, updateData, deleteData };