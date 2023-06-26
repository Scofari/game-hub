import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../types/fetch-response";
import { GameQuery } from "../types/game-query.interface";
import { Game } from "../types/game.interface";
import APIClient from "./../services/apiClient";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
	const {
		genre,
		platform,
		sortOrder: ordering,
		searchText: search,
	} = gameQuery;

	return useQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: genre?.id,
					parent_platforms: platform?.id,
					ordering,
					search,
				},
			}),

		staleTime: 24 * 60 * 60 * 1000, //24h
	});
};

export default useGames;
