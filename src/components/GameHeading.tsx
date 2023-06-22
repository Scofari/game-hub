import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/game-query.interface";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const { genre, platform } = gameQuery;
	const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

	return (
		<Heading as="h1" marginY={5} fontSize={"5xl"}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
