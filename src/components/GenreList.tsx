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
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading marginBottom={3} fontSize={"2xl"}>
				Genres
			</Heading>
			<List>
				{genres?.results.map((genre) => {
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
									onClick={() => setSelectedGenreId(genre.id)}
									whiteSpace={"normal"}
									textAlign={"left"}
									fontSize={"lg"}
									variant={"link"}
									fontWeight={
										id === selectedGenreId
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
