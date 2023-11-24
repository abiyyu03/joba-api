//authentication handler
// const { authenticateUser } = require('./handler/authHandler');

//data handler
const {} = require('./handler/dataHandler');

const routes = [
	//GET
	{
		method: 'GET',
		path: '/',
		// options: {
		// 	auth: 'simple',
		// },
		handler: function (request, h) {
			const response = {
				status: 'success',
				message: 'Hello World!',
				data: {
					namaProyek: 'Joba API',
					deskripsi: 'Web Service Data untuk Mobile',
					dokumentasi: 'link dokumentasi menyusul',
				},
			};
			return h.response(response).type('application/json');
		},
	},
	{
		method: 'POST',
		path: '/login',
		// handler: authenticateUser,
	},
	{
		method: 'GET',
		path: '/bookmarks',
		// handler: authenticateUser,
	},
	{
		method: 'POST',
		path: '/bookmarks',
		// handler: authenticateUser,
	},
];
module.exports = routes;
