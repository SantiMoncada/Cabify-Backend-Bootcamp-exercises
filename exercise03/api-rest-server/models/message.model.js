const { Schema, model } = require("mongoose")

const messageSchema = new Schema(
    {
        destination: {
            type: String
        },
        body: {
            type: String
        },
        status: {
            type: String,
            enum: ["OK", "ERROR", "NOTSEND"]
        }
    },

    {
        timestamps: true,
    }
)

module.exports = model("Message", messageSchema)