const router = require("express").Router();
const Dictionary = require("../models/dictionary");

// GET all words
// /api/words
router.get("/api/all", (req, res) => {
	Dictionary.find({})
		.select('word')
		.then(dbDictionary => {
			res.json(dbDictionary);
		})
		.catch(err => {
			res.json(err);
		});
});
// GET meaning of one word
// /api/word/:word
router.get("/api/:word", (req, res) => {
	Dictionary.findOne({
		word: req.params.word
	})
		.select('meaning')
		.then(dbDictionary => {
			res.json(dbDictionary);
		})
		.catch(err => {
			res.json(err);
		});
});

// GET all words that start with a specific letter
// /api/words/:letter
router.get("/api/all/:letter", (req, res) => {
	Dictionary.find({
		word: { $regex: '^' + req.params.letter, $options: 'i' }
	})
		.select('word')
		.then(dbDictionary => {
			res.json(dbDictionary);
		})
		.catch(err => {
			res.json(err);
		});
})

module.exports = router;