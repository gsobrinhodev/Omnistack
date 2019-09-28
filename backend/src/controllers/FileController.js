const File = require("../models/File");

class FileController {
    async store(req, res) {
        console.log(req.file);
        //criar arquivo
        return res.send('OK');
    }
}

module.exports = new FileController();