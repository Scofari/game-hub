import { HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitch, SearchInput } from "./";

interface Props {
	onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
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
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
