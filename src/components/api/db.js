const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ansh:ansh070708@cluster0.3akkk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db




