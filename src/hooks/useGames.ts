import { GameQuery } from "../types/game-query.interface";
import { Game } from "../types/game.interface";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
	const { genre, platform, sortOrder: ordering } = gameQuery;

	return useData<Game>(
		"/games",
		{
			params: {
				genres: genre?.id,
				platforms: platform?.id,
				ordering,
			},
		},
		[gameQuery]
	);
};

export default useGames;
