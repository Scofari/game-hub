import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "./";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding={3}>
			<Image
				src={"hub.webp"}
				boxSize={20}
				padding={2}
				borderRadius={50}
			/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
