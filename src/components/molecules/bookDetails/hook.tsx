import { useState } from "react";
import useToast from "@/hooks/useToast.hook";
import { BookStatus } from "@/models/book.model";

const useBookDetails = (bookStatus: BookStatus) => {
	const [inputValue, setInputValue] = useState('');
	const [hasImageRenderError, setHasImageRenderError] = useState(false);
	const [isRegisteringReading, setIsRegisteringReading] = useState(false);
	const { addToast } = useToast()
	const [notes, setNotes] = useState<{content: string, date: string}[]>([]);

	const addNote = (note: {content: string, date: string}) => {
		setNotes([...notes, note]);
	}
	
	const onSubmit = () => {
		if(inputValue === '') return;
		const toastContent = bookStatus === 'not-readed' || bookStatus === 'desired' || bookStatus === 'unknown' ? 'Anotação adicionada com sucesso' : 'Resenha adicionada com sucesso';
		addToast(toastContent, 'success');
		addNote({
			content: inputValue,
			date: new Date().toISOString()
		});
		setInputValue('');
	}
	
	const handleReadingRegister = () => {
		setIsRegisteringReading(false)
		addToast('Leitura registrada com sucesso', 'success');
	}

	const handleEnableReadingRegister = () => {
		setIsRegisteringReading(true);
	}

	return {
		onSubmit,
		inputValue,
		setInputValue,
		handleReadingRegister,
		handleEnableReadingRegister,
		hasImageRenderError,
		setHasImageRenderError,
		isRegisteringReading,
		notes,
	}
}

export { useBookDetails };