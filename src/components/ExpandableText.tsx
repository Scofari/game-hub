import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [isExpandable, setIsExpandable] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = isExpandable
		? children
		: children.substring(0, limit) + "...";

	return (
		<Text>
			{summary}
			<Button
				size="xs"
				colorScheme="yellow"
				marginLeft={1}
				onClick={() => setIsExpandable(!isExpandable)}
			>
				{isExpandable ? "Show Less" : "Read More"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
