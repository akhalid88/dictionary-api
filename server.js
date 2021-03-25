const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dictionaryDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
	console.log(`We are listening... ${PORT}!`);
});