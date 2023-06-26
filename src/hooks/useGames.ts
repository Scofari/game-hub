import { useInfiniteQuery } from "@tanstack/react-query";
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

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: genre?.id,
					parent_platforms: platform?.id,
					ordering,
					search,
					page: pageParam,
				},
			}),
		staleTime: 24 * 60 * 60 * 1000, //24h
		getNextPageParam: (lastPage, allPages) => {
			console.log("allPages: ", allPages);
			console.log("lastPage: ", lastPage);

			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export default useGames;
