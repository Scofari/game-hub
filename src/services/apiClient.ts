import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api/games",
	params: {
		key: "6c873c54c5bf484391644b487ceba4fb",
	},
});
