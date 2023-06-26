import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import { GameQuery } from "../types/game-query.interface";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { genreId, platformId } = gameQuery;
	const platform = usePlatform(platformId);
	const genre = useGenre(genreId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<Heading as="h1" marginY={5} fontSize={"5xl"}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
