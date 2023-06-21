import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardContainer, GameCardSkeleton } from "./";
import useGames from "../hooks/useGames";

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	console.log("isLoading: ", isLoading);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={10}
				padding={3}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
