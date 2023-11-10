//authentication handler
const {

} = require('./handler/authHandler');

//data handler
const {

} = require('./handler/dataHandler');


const routes = [
	//GET
	{
		method: 'GET',
		path: '/',
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
module.exports = routes;

// //POST
// {
// 	method: 'POST',
// 	path: '/',
// },
// //PUT
// {
// 	method: 'PUT',
// 	path: '/',
// },
// //DELETE
// {
// 	method: 'DELETE',
// 	path: '/',
// },
