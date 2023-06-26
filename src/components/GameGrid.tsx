import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import { GameQuery } from "../types/game-query.interface";
import { GameCard, GameCardContainer, GameCardSkeleton } from "./";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data: games,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount =
		games?.pages.reduce((total, page) => {
			return (total += page.results.length);
		}, 0) || 0;

	return (
		<InfiniteScroll
			next={() => fetchNextPage()}
			dataLength={fetchedGamesCount}
			hasMore={!!hasNextPage}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
				padding={3}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games?.pages.map((page, index) => (
					<Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
