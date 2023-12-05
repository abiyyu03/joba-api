const { getAll, createData, updateData, deleteData, getById } = require('../handler/tagHandler');

const tag = [
	{
		method: 'GET',
		path: '/tags',
		handler: getAll,
	},
	{
		method: 'POST',
		path: '/tags',
		handler: createData,
	},
	{
		method: 'PUT',
		path: '/tags/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/tags/{id}',
		handler: deleteData,
	},
	{
		method: 'GET',
		path: '/tags/{id}',
		handler: getById,
	},
];

module.exports = tag;
