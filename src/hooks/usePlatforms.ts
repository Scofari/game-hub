import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import { Platform } from "../types/game.interface";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms,
	});

export default usePlatforms;
