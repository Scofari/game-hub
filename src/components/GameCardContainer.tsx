import { Box } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius={10}
			overflow={"hidden"}
			_hover={{
				transform: "scale(1.03)",
				transition: "transform .15s ease-in",
			}}
			cursor="pointer"
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
