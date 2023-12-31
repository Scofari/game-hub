import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
	ExpandableText,
	GameAttributes,
	GameScreenshots,
	GameTrailer,
} from "../components";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
	const { slug } = useParams();

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const { name, description_raw, id } = game;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
			<GridItem>
				<Heading>{name}</Heading>
				<ExpandableText>{description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={id} />
				<GameScreenshots gameId={id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
