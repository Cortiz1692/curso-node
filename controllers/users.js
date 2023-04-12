const {response} = require ('express');


const usuarioGet = (req, res) => {

    res.json({
        msg: 'get api - controllers'
    });
  }

  const usuarioPost = ( req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API',
        body

    });
  }


  module.exports = {
    usuarioGet,
    usuarioPost
  }