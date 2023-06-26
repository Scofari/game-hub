import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { Genre } from "../types/genre.interface";
import APIClient from "./../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
