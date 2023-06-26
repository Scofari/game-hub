import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import { Platform } from "../types/game.interface";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery({
		queryKey: ["platform"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
