const { searchPost } = require('../handler/searchHandler');

const search = [
	{
		method: 'GET',
		path: '/search',
		config: { auth: false },
		handler: searchPost,
	},
];

module.exports = search;
