import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components";
import useGame from "../hooks/useGame";

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
			<ExpandableText>{description_raw}</ExpandableText>
		</>
	);
};

export default GameDetailPage;
