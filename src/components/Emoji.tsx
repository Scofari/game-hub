import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const meh = "/meh.png";
	const thumbsUp = "/thumbs-up.png";
	const bullsEye = "/bulls-eye.png";

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh" },
		4: { src: thumbsUp, alt: "recommended" },
		5: { src: bullsEye, alt: "exceptional" },
	};

	return <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={1} />;
};

export default Emoji;
