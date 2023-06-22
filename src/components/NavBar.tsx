import { HStack, Image } from "@chakra-ui/react";
import logo from "../../public/unity-seeklogo.com.svg";
import { ColorModeSwitch, SearchInput } from "./";

const NavBar = () => {
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
