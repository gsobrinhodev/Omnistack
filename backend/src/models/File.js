const mongoose = require("mongoose");

const File = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        patch: {
            type: String,
            required: true
        },
        files: []
    },
    {
        timestamps: true
    }
);

moduelo.exports = mongoose.model("File", File);