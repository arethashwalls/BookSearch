const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    summary: String,
    image: {
        type: String,
        //RegEx pattern for matching web URLs, from [https://stackoverflow.com/questions/8188645/javascript-regex-to-match-a-url-in-a-field-of-text]
        match: /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/,
    },
    link: {
        type: String,
        //RegEx pattern for matching web URLs, from [https://stackoverflow.com/questions/8188645/javascript-regex-to-match-a-url-in-a-field-of-text]
        match: /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);