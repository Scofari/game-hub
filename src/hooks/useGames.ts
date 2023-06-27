import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import useGameQueryStore from "../store";
import APIClient, { FetchResponse } from "./../services/apiClient";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
	const gameQuery = useGameQueryStore((store) => store.gameQuery);
	const {
		genreId,
		platformId,
		sortOrder: ordering,
		searchText: search,
	} = gameQuery;

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: genreId,
					parent_platforms: platformId,
					ordering,
					search,
					page: pageParam,
				},
			}),
		staleTime: ms("24h"),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export default useGames;
