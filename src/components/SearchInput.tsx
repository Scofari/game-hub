import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const setSearchTerm = useGameQueryStore((s) => s.setSearchTerm);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const inputEl = inputRef.current;
		if (inputEl) setSearchTerm(inputEl.value);
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
