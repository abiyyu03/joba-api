const { getAll, createData, updateData, deleteData, getById } = require('../handler/tipePekerjaanHandler');

const tipePekerjaan = [
	{
		method: 'GET',
		path: '/tipe_pekerjaans',
		handler: getAll,
	},
	{
		method: 'POST',
		path: '/tipe_pekerjaans',
		handler: createData,
	},
	{
		method: 'PUT',
		path: '/tipe_pekerjaans/{id}',
		handler: updateData,
	},
	{
		method: 'DELETE',
		path: '/tipe_pekerjaans/{id}',
		handler: deleteData,
	},
	{
		method: 'GET',
		path: '/tipe_pekerjaans/{id}',
		handler: getById,
	},
];

module.exports = tipePekerjaan;
