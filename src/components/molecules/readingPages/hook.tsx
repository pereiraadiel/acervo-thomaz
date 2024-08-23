import { useState } from "react";

type UseReadingPagesProps = {
	onSubmit: () => void;
	maxPages: number;
}

const useReadingPages = ({onSubmit, maxPages}: UseReadingPagesProps) => {
	const [error, setError] = useState('');
	const [inputValue, setInputValue] = useState('');

	const onButtonPress = () => {
		if(error || inputValue === '') return;
		onSubmit();
	}

	const onChangeValue = (value: string) => {
		if(Number(value) > maxPages) {
			setError(`Número de páginas lidas não pode ser maior que o total de páginas do livro (${maxPages})`);
		} else {
			setError('');
		}
		setInputValue(value);
	}

	return {
		error,
		inputValue,
		onChangeValue,
		onButtonPress
	}
}

export { useReadingPages };