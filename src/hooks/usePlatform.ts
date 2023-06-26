import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../types/fetch-response";
import { Platform } from "../types/game.interface";
import platforms from "../data/platforms";

const usePlatforms = () =>
	useQuery({
		queryKey: ["platform"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>("/platforms/lists/parents")
				.then((response) => response.data),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
