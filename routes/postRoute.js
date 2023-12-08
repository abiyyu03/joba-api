const { getAll, createData, updateData, deleteData, getById } = require('../handler/postHandler');

const post = [
	{
		method: 'GET',
		path: '/post',
		handler: getAll,
	},
	{
		method: 'POST',
		path: '/post',
		handler: createData,
	},
	{
		method: 'PUT',
		path: '/post/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/post/{id}',
		handler: deleteData,
	},
	{
		method: 'GET',
		path: '/post/{id}',
		handler: getById,
	},
];

module.exports = post;
