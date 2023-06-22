import { Game } from "../types/game.interface";
import { Genre } from "../types/genre.interface";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
	useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
