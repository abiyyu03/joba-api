const { getAll, updateData, deleteData, getById } = require('../handler/userHandler');

const user = [
	{
		method: 'GET',
		path: '/users',
		handler: getAll,
	},
	{
		method: 'GET',
		path: '/users/{id}',
		handler: getById,
	},
	{
		method: 'PUT',
		path: '/users/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/users/{id}',
		handler: deleteData,
	},
];

module.exports = user;
