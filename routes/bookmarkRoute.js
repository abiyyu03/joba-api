const { getAll, createData, updateData, deleteData, getById } = require('../handler/bookmarkHandler');

const bookmark = [
	{
		method: 'GET',
		path: '/bookmarks/{userId}',
		handler: getAll,
	},
	{
		method: 'POST',
		path: '/bookmarks',
		handler: createData,
	},
	{
		method: 'PUT',
		path: '/bookmarks/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/bookmarks/{id}',
		handler: deleteData,
	},
	// {
	// 	method: 'GET',
	// 	path: '/bookmarks/{id}',
	// 	handler: getById,
	// },
];

module.exports = bookmark;
