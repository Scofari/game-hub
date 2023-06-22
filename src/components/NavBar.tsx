import { HStack, Image } from "@chakra-ui/react";
import logo from "../../public/unity-seeklogo.com.svg";
import { ColorModeSwitch, SearchInput } from "./";

interface Props {
	onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack justifyContent="space-between" padding={3}>
			<Image
				src={logo}
				alt={"logo"}
				boxSize={20}
				padding={3}
				borderRadius={50}
			/>
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
