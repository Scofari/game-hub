import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import { Genre } from "../types/genre.interface";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY={"5px"}>
					<HStack>
						<Image
							boxSize={"36px"}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.name}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize={"lg"}
							variant={"link"}
							minWidth={"auto"}
							fontWeight={
								genre.id === selectedGenre?.id
									? "bold"
									: "normal"
							}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
