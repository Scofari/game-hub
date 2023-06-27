import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
	const { slug } = useParams();
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const { name, description_raw } = game;
	return (
		<>
			<Heading>{name}</Heading>
			<Text>{description_raw}</Text>
		</>
	);
};

export default GameDetailPage;