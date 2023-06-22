import { Platform } from "./game.interface";
import { Genre } from "./genre.interface";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
}
