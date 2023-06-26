import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface GameQuery {
	searchText?: string;
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchTerm: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setSearchTerm: (searchText) => set(() => ({ gameQuery: { searchText } })),
	setGenreId: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

if (process.env.NODE_ENV === "development")
	mountStoreDevtool("GameQuery Store", useGameQueryStore);

export default useGameQueryStore;
