import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import {
	GameGrid,
	GenreList,
	NavBar,
	PlatformSelector,
	SortSelector,
} from "./components";
import { GameQuery } from "./types/game-query.interface";

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { genre, platform, sortOrder } = gameQuery;

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "250px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={5}>
					<GenreList
						selectedGenre={genre}
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<HStack gap={5} paddingLeft={2} marginBottom={5}>
					<PlatformSelector
						selectedPlatform={platform}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<SortSelector
						sortOrder={sortOrder}
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
