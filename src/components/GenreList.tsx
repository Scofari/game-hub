import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
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
		<>
			<Heading marginBottom={3} fontSize={"2xl"}>
				Genres
			</Heading>
			<List>
				{genres.map((genre) => {
					const { id, image_background: image, name } = genre;
					return (
						<ListItem key={id} paddingY={"5px"}>
							<HStack>
								<Image
									objectFit={"cover"}
									boxSize={"36px"}
									borderRadius={8}
									src={getCroppedImageUrl(image)}
									alt={name}
								/>
								<Button
									onClick={() => onSelectGenre(genre)}
									whiteSpace={"normal"}
									textAlign={"left"}
									fontSize={"lg"}
									variant={"link"}
									fontWeight={
										id === selectedGenre?.id
											? "bold"
											: "normal"
									}
								>
									{name}
								</Button>
							</HStack>
						</ListItem>
					);
				})}
			</List>
		</>
	);
};

export default GenreList;
