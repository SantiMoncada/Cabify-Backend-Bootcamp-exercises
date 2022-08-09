const router = require("express").Router();
const MessageappService = require('./../services/messageApp.service')

router.post("/message", (req, res, next) => {
  const { destination, body } = req.body

  MessageappService
    .sendMessage({ destination, body })
    .then(({ data }) => {
      console.log(data)
      res.status(200).json({ response: data })
    })
    .catch(err => {

      console.log(err)
      res.status(500).json({ message: "An error has ocurred" });
    })
})

module.exports = router;
