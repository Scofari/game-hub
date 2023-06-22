import { GameQuery } from "../types/game-query.interface";
import { Game } from "../types/game.interface";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
	const {
		genre,
		platform,
		sortOrder: ordering,
		searchText: search,
	} = gameQuery;

	return useData<Game>(
		"/games",
		{
			params: {
				genres: genre?.id,
				platforms: platform?.id,
				ordering,
				search,
			},
		},
		[gameQuery]
	);
};

export default useGames;
