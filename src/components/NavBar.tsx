import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch, SearchInput } from "./";
import { Link } from "react-router-dom";

const NavBar = () => {
	const logo = "/logo.svg";

	return (
		<HStack justifyContent="space-between" padding={3}>
			<Link to="/">
				<Image
					src={logo}
					alt={"logo"}
					boxSize={20}
					padding={1}
					borderRadius={50}
				/>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
