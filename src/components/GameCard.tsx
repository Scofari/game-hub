import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import { Game } from "../types/game.interface";
import { CriticScore, Emoji, PlatformIconList } from "./";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const {
		background_image: image,
		parent_platforms: parentPlatforms,
		metacritic: score,
		rating_top: rating,
		name,
		slug,
	} = game;
	const platforms = parentPlatforms.map((p) => p.platform);

	return (
		<Card>
			<Image src={getCroppedImageUrl(image)} alt={game.name} />
			<CardBody>
				<HStack justifyContent={"space-between"} marginBottom={3}>
					<PlatformIconList platforms={platforms} />
					<CriticScore score={score} />
				</HStack>
				<Heading fontSize={"xl"}>
					<Link to={`/games/${slug}`}>{name}</Link>
					<Emoji rating={rating} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
