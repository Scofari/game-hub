import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types/fetch-response";

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "6c873c54c5bf484391644b487ceba4fb",
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) =>
		axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((response) => response.data);
}

export default APIClient;
