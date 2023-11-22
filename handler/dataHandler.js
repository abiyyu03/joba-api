const { nanoid } = require('nanoid');
const data = require('../src/data');

const tambahUser = (request, h) => {
    const u_id = nanoid(16);
    ///* tester */ const handlerPayload = payloadHandler();
    const { 
    fullname, email, pass, address, number_phone, image_profile, description
    } = request.payload;
    // /* tester */console.log(request.payload);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    //execute
    const userBaru = {
        u_id, fullname, email, pass, address, number_phone, image_profile, description, insertedAt, updatedAt, 
    };
    if (!fullname) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan user. Mohon isi nama lengkap anda',
      });
      response.code(400);
      return response;
    }
    
    data.push(userBaru);
    const berhasil = data.filter((b) => b.id === id).length > 0;

    
    if (berhasil) {
      const response = h.response({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: {

          u_id: `${u_id}`,
        },
      });
      response.code(201);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'user gagal didaftarkan',
    });
    response.code(500);
    return response;
  };


  //POST HANDLER
  const addPost = (request, h) => {
    const p_id = nanoid(16);
    const { 
    title_post, tag_id, tag_name, body, user_id, slug, location, job_id, job_type
    } = request.payload;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    //execute
    const newPost = {
      p_id, title_post, tag_id, tag_name, body, user_id, slug, location, job_id, job_type, insertedAt, updatedAt
    };
    if (!title_post) {
      const response = h.response({
        status: 'Gagal',
        message: 'Mohon untuk menambahkan judul pada post yang ingin dibuat',
      });
      response.code(400);
      return response;
    }
    
    data.push(newPost);
    const berhasil = data.filter((p) => p.id === p.id).length > 0;

    
    if (berhasil) {
      const response = h.response({
        status: 'success',
        message: 'Postingan anda berhasil dibuat',
        data: {

          p_id: `${p_id}`,
        },
      });
      response.code(201);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Post Pekerjaan gagal ditambahkan',
    });
    response.code(500);
    return response;
  };
  const readAllPost = () =>(
    {
    status: 'Sukses',
    data,
    
  });
  const readPostByID = (request, h) => {
    const { idPost } = request.params;
    console.log(idPost);
    const post = data.filter((p) => p.id === idPost)[0];
    console.log(post);
    if (post) {
        return {
          status: 'Sukses',
          posts: {
            data,
          },
        };
      }
    const response = h.response({
    status: 'Gagal',
    message: 'Post yang anda cari tidak ditemukan',
  });
  response.code(404);
  return response;
  };
  module.exports={
    tambahUser,
    addPost,
    readAllPost,
  };