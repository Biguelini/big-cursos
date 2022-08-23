const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('uploads'))
    },
    filename: (req, file, callback) => {
        callback(null, `${file.originalname}`)
    },
})

module.exports = storage
