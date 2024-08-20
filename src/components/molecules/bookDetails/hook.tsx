import { useState } from "react";
import useToast from "@/hooks/useToast.hook";

const useBookDetails = () => {
	const [inputValue, setInputValue] = useState('');
	const { addToast } = useToast()
	const [notes, setNotes] = useState<{content: string, date: string}[]>([]);

	const addNote = (note: {content: string, date: string}) => {
		setNotes([...notes, note]);
	}

	const onSubmit = () => {
		addToast('Resenha adicionada com sucesso', 'success');
		addNote({
			content: inputValue,
			date: new Date().toISOString()
		});
		setInputValue('');
	}
	
	return {
		onSubmit,
		inputValue,
		setInputValue,
		notes,
	}
}

export { useBookDetails };