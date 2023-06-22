import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const inputEl = inputRef.current;
		if (inputEl) onSearch(inputEl.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={inputRef}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
