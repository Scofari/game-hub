import { Platform } from "./Platform";

export interface Game {
	id: number;
	name: string;
	slug: string;
	description_raw: string;
	background_image: string;
	metacritic: number;
	rating_top: number;
	parent_platforms: { platform: Platform }[];
}
