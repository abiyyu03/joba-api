//authentication handler
const {

} = require('./handler/authHandler');

//data handler
const { 
	tambahUser,
	addPost,
	readAllPost,
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
	//user
	{
		method: 'POST',
		path: '/users',
		handler: tambahUser,
	},

	//Routes Postingan
	{
		method: 'GET',
		path: '/posts',
		handler:readAllPost,
	},
	{
		method: 'POST',
		path: '/posts',
		handler:addPost,
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
