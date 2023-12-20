//authentication handler
// const { authenticateUser } = require('./handler/authHandler');

//data handler

const user = require('./routes/userRoute');
const auth = require('./routes/authRoute');
const bookmark = require('./routes/bookmarkRoute');
const tag = require('./routes/tagRoute');
const tipePekerjaan = require('./routes/tipePekerjaanRoute');
const post = require('./routes/postRoute');
const searchPost = require('./routes/searchRoute');
const skill = require('./routes/skillRoute');

let route = [
	//GET
	{
		method: 'GET',
		path: '/',
		// options: {
		// 	auth: 'simple',
		// },
		config: { auth: 'jwt' },
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
routes = route
	.concat(user)
	.concat(bookmark)
	.concat(tag)
	.concat(tipePekerjaan)
	.concat(auth)
	.concat(searchPost)
	.concat(post)
	.concat(skill);
module.exports = routes;
