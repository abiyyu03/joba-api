const { getAll, createData, updateData, deleteData, getById } = require('../handler/skillHandler');

const bookmark = [
	{
		method: 'GET',
		path: '/skills',
		handler: getAll,
	},
	{
		method: 'POST',
		path: '/skills',
		handler: createData,
	},
	{
		method: 'PUT',
		path: '/skills/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/skills/{id}',
		handler: deleteData,
	},
	{
		method: 'GET',
		path: '/skills/{id}',
		handler: getById,
	},
];

module.exports = bookmark;
