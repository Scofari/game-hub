// import { GameQuery } from "../types/game-query.interface";
// import { Game } from "../types/game.interface";
// import useData from "./useData";

// const useGames = (gameQuery: GameQuery) => {
// 	const {
// 		genre,
// 		platform,
// 		sortOrder: ordering,
// 		searchText: search,
// 	} = gameQuery;

// 	return useData<Game>(
// 		"/games",
// 		{
// 			params: {
// 				genres: genre?.id,
// 				platforms: platform?.id,
// 				ordering,
// 				search,
// 			},
// 		},
// 		[gameQuery]
// 	);
// };

// export default useGames;
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../types/fetch-response";
import { GameQuery } from "../types/game-query.interface";
import { Game } from "../types/game.interface";

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
			apiClient
				.get<FetchResponse<Game>>("/games", {
					params: {
						genres: genre?.id,
						parent_platforms: platform?.id,
						ordering,
						search,
					},
				})
				.then((response) => response.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
	});
};

export default useGames;
