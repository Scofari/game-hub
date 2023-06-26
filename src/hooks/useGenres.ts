import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../types/fetch-response";
import { Genre } from "../types/genre.interface";

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Genre>>("/genres")
				.then((response) => response.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
