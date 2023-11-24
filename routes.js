//authentication handler
// const { authenticateUser } = require('./handler/authHandler');

//data handler

const user = require('./routes/user');
const auth = require('./routes/auth');
const bookmark = require('./routes/bookmark');

let route = [
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
];
routes = route.concat(user).concat(bookmark);
// console.log(routes);
module.exports = routes;
