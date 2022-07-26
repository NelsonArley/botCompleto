const router = require('express').Router();
const { MessageMedia,Location } = require("whatsapp-web.js");
const request = require('request')
const vuri = require('valid-url');
const fs = require('fs');


const mediadownloader = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }


  router.post('/enviar', async (req, res, next) => {
    try {
      const { number, message } = req.body; // Get the body
      const msg = await client.sendMessage(`${number}@c.us`, message); // Send the message 
      res.send({ status: 200, message: `Mensaje enviado a el numero:  ${number}` })
    } catch (error) {
      next(error);
      res.send(error);
    }
  });


module.exports = router;