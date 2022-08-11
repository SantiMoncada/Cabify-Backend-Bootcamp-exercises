const router = require("express").Router();
const MessageappService = require('./../services/messageApp.service')
const Message = require('./../models/message.model')
const messageRecorder = require('./../utils/messageRecorder')

router.post("/message", (req, res, next) => {
  console.log("req ---- >", req)
  const { destination, body } = req.body

  if (!destination || !body) {
    res.status(400).json({ message: "missing destinaion and/or body" })
    return
  }

  MessageappService
    .sendMessage({ destination, body })
    .then(({ data }) => {

      return Message.create({ destination, body, status: "OK" })
    })
    .then(mdb => {
      res.status(200).json({ response: mdb, status: "OK" })
    })
    .catch(err => {
      Message.create({ destination, body, status: "ERROR" })
        .then(() => {
          res.status(500).json({ message: "An error has ocurred" })
        })
    })
})

router.get("/getMessages", (req, res, next) => {
  Message
    .find()
    .then(data => {
      res.status(200).json({ messages: data })

    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "An error has ocurred" });
    })
})

module.exports = router;
