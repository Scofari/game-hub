import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { Game } from "../types/game.interface";
import apiClient from "../services/apiClient";

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((response) => {
				setGames(response.data.results);
				setLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
