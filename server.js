const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dictionaryDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// server up static assets for heroku
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//API router
app.use(require("./routes/api-routes.js"));

//Start listening
app.listen(PORT, () => {
	console.log(`We are listening... ${PORT}!`);
});