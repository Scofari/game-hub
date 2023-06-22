import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/imageUrl";
import { Game } from "../types/game.interface";
import { CriticScore, PlatformIconList } from "./";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const {
		background_image: image,
		parent_platforms: parentPlatforms,
		metacritic: score,
		name,
	} = game;
	const platforms = parentPlatforms.map((p) => p.platform);

	return (
		<Card>
			<Image src={getCroppedImageUrl(image ?? "")} alt={game.name} />
			<CardBody>
				<Heading fontSize={"2xl"}>{name}</Heading>
				<HStack justifyContent={"space-between"}>
					<PlatformIconList platforms={platforms} />
					<CriticScore score={score} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
