import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import {
	GameGrid,
	GameHeading,
	GenreList,
	NavBar,
	PlatformSelector,
	SortSelector,
} from "./components";

function App() {
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
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<Box paddingLeft={2}>
					<GameHeading />
					<Flex gap={5} marginBottom={5}>
						<PlatformSelector />
						<SortSelector />
					</Flex>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
