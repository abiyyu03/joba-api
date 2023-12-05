const  { getAll, updateData, deleteData } = require('../handler/userHandler');

const user = [
	{
		method: 'GET',
		path: '/users',
		handler: getAll,
	},
	{
		method: 'PUT',
		path: '/users/:id',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/users/:id',
		handler: deleteData,
	},
];

module.exports = user;
