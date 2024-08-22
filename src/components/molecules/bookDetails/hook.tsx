import { useState } from "react";
import useToast from "@/hooks/useToast.hook";
import { BookStatus } from "@/models/book.model";

const useBookDetails = (bookStatus: BookStatus) => {
	const [inputValue, setInputValue] = useState('');
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
		addToast('Leitura registrada com sucesso', 'success');
	}

	return {
		onSubmit,
		inputValue,
		setInputValue,
		handleReadingRegister,
		notes,
	}
}

export { useBookDetails };