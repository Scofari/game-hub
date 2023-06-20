import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
	return (
		<HStack>
			<Image src={"hub.webp"} boxSize={20} />
			<Text>NavBar</Text>
		</HStack>
	);
};

export default NavBar;
