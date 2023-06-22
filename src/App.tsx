import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { GameGrid, GenreList, NavBar, PlatformSelector } from "./components";
import { GameQuery } from "./types/game-query.interface";

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { genre, platform } = gameQuery;

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
				<PlatformSelector
					selectedPlatform={platform}
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
				/>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
