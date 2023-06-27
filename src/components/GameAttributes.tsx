import { SimpleGrid, Text } from "@chakra-ui/react";
import { CriticScore, DefinitionItem } from ".";
import Game from "../entities/Game";

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	const {
		metacritic: score,
		parent_platforms: platforms,
		genres,
		publishers,
	} = game;
	return (
		<SimpleGrid as="dl" columns={2}>
			<DefinitionItem term="Platforms">
				{platforms.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Metascore">
				<CriticScore score={score} />
			</DefinitionItem>
			<DefinitionItem term="Genres">
				{genres.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem term="Publishers">
				{publishers.map((publisher) => (
					<Text key={publisher.id}>{publisher.name}</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;
