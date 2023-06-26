import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../types/genre.interface";
import APIClient from "./../services/apiClient";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
