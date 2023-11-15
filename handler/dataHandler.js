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
    const berhasil = data.filter((u) => u.id === u.id).length > 0;
    
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

  module.exports={
    tambahUser
  };