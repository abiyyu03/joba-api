/**
 * Quick Note :
 * - Where post handler get data? there is on posts table
 * -
 */

const { nanoid } = require('nanoid');
const client = require('../config/database');
const errorResponse = require('../constant/responseMessage');

const getAll = async (request, h) => {
	try {
		const all = await client.query(`SELECT * FROM posts 
            LEFT JOIN users ON posts.user_id = users.u_id
            LEFT JOIN tags ON posts.tag_id = tags.id_tag
            LEFT JOIN skills ON posts.tag_id = skills.id_skill`);
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
		const { title, tag_id, body, user_id, slug, location, contact, skill_id } = request.payload;

		const id = nanoid(8);
		const created_At = new Date();
		const updated_At = created_At;

		//create data
		const create = await client.query(
			`INSERT INTO posts (
                id,
                title,
                tag_id,
                body,
                user_id,
                slug,
                created_at,
                updated_at,
                location, 
                contact, 
                skill_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
			[id, title, tag_id, body, user_id, slug, created_At, updated_At, location, contact, skill_id],
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
		const { title, tag_id, body, user_id, slug, location, contact, skill_id } = request.payload;
		const { id } = request.params;

		const updatedAt = new Date();

		//update data
		const update = await client.query(
			`UPDATE posts SET title=$1, tag_id=$2, body=$3, user_id=$4, slug=$4, location=$5, skill_id=$6 contact=$7, updated_at=$8, is_active=$9 WHERE id = $9 RETURNING *`,
			[title, tag_id, body, user_id, location, contact, skill_id, updatedAt, is_active, id],
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
		const deleted = await client.query(`DELETE FROM posts WHERE id = $1 RETURNING *`, [id]);

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
		const dataById = await client.query(
			`SELECT * FROM posts 
            LEFT JOIN skills ON posts.tag_id = skills.id_skill
            WHERE id = $1`,
			[id],
		);

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

const getByUserId = async (request, h) => {
	try {
		const { idUser } = request.params;

		//delete data
		const dataByUserId = await client.query(
			`SELECT * FROM posts 
            LEFT JOIN skills ON posts.skill_id = skills.id_skill
            LEFT JOIN tags ON posts.tag_id = tags.id_tag
            WHERE posts.user_id = $1`,
			[idUser],
		);

		if (dataByUserId.rowCount <= 0) throw new Error(`Data dengan id user ${idUser} tidak tersedia`);

		return h
			.response({
				status: 'Success',
				message: `Data fetched successfully`,
				total: dataByUserId.rows.length,
				data: dataByUserId.rows,
			})
			.code(200);
	} catch (error) {
		return h.response(errorResponse(error.message));
	}
};

module.exports = { getAll, createData, updateData, deleteData, getById, getByUserId };
