/**
 * Workflow :
 * - user click bookmark button call createData handler
 */

const getAll = () => {
	//query
	return h.code(200).response({
		status: 'Success',
		message: 'Data fetched successfully',
		// data: {
		// 	namaProyek: 'Joba API',
		// 	deskripsi: 'Web Service Data untuk Mobile',
		// 	dokumentasi: 'link dokumentasi menyusul',
		// },
	});
};

const createData = (request, h) => {
	const { postId, userId } = request.body;

	const createdAt = new Date().toISOString;
	const updatedAt = createdAt;

	//create data

	return h.code(201).response({
		status: 'Success',
		message: 'Data created successfully !',
		// data: {
		// 	namaProyek: 'Joba API',
		// 	deskripsi: 'Web Service Data untuk Mobile',
		// 	dokumentasi: 'link dokumentasi menyusul',
		// },
	});
};

const updateData = () => {};

const deleteData = () => {};

const getById = () => {};
