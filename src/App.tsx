import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import {
	GameGrid,
	GameHeading,
	GenreList,
	NavBar,
	PlatformSelector,
	SortSelector,
} from "./components";
import { GameQuery } from "./types/game-query.interface";

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { genreId, platformId, sortOrder } = gameQuery;

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={5}>
					<GenreList
						selectedGenreId={genreId}
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genreId: genre.id })
						}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<Box paddingLeft={2}>
					<GameHeading gameQuery={gameQuery} />
					<Flex gap={5} marginBottom={5}>
						<PlatformSelector
							selectedPlatformId={platformId}
							onSelectPlatform={(platform) =>
								setGameQuery({
									...gameQuery,
									platformId: platform.id,
								})
							}
						/>
						<SortSelector
							sortOrder={sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
