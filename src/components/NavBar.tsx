import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch, SearchInput } from "./";

const NavBar = () => {
	const logo = "logo.svg";

	return (
		<HStack justifyContent="space-between" padding={3}>
			<Image
				src={logo}
				alt={"logo"}
				boxSize={20}
				padding={3}
				borderRadius={50}
			/>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
