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
                    deskripsi: 'Api untuk mobile',
                    author: 'Team',
                    dokumentasi: 'link github',
			}
			return h.response(response).type('application/json'),
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