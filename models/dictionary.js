const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
	word: {
		type: String,
		trim: true,
		required: "Word yo, it's required"
	},
	meaning: {
		type: String,
		trim: true,
		required: "Meaning is required, yo"
	}
});

const Dictionary = mongoose.model("Dictionary", DictionarySchema);

module.exports = Dictionary;