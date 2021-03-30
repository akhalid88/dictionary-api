import axios from "axios";

const API = {
	//GET all words
	getWords: function () {
		return axios.get("/api/all");
	}
};

export default API;