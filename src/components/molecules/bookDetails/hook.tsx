import { useState } from "react";
import useToast from "@/hooks/useToast.hook";
import { BookStatus } from "@/models/book.model";
import useBook from "../../../hooks/useBook.hook";
import { bookService } from "../../../services/books/book.service";

const useBookDetails = (bookStatus: BookStatus) => {
	const [inputValue, setInputValue] = useState('');
	const [hasImageRenderError, setHasImageRenderError] = useState(false);
	const [isRegisteringReading, setIsRegisteringReading] = useState(false);
	const [isChangingStatus, setIsChangingStatus] = useState(false);
	const { addToast } = useToast()
	const [notes, setNotes] = useState<{content: string, date: string}[]>([]);

	const addNote = (note: {content: string, date: string}) => {
		setNotes([...notes, note]);
	}

	const { book, setBook } = useBook();
	
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
	
	const handleReadingRegister = (id:string, readedPageCount: number) => {
		setIsRegisteringReading(false)
		bookService.readingRegister(id, readedPageCount).then(() => {
			if(book) setBook({...book, readedPageCount, progress: Number(((readedPageCount / book.pageCount) * 100).toFixed(2))});
			addToast('Leitura registrada com sucesso', 'success');
		}).catch(() => {
			addToast('Ocorreu um erro ao registrar leitura', 'error');
		});
	}

	const handleEnableReadingRegister = () => {
		setIsRegisteringReading(true);
	}

	const handleEnableStatusChange = () => {
		setIsChangingStatus(true);
	}

	const handleStatusChange = (status: BookStatus) => {
		if(book) {
			bookService.changeStatus(book.id, status).then(() => {
				addToast('Status do livro alterado com sucesso', 'success');
			}).catch(() => {
				addToast('Ocorreu um erro ao alterar status do livro', 'error');
			});
			setBook({...book, status });
		}
		setIsChangingStatus(false);
	}

	return {
		onSubmit,
		inputValue,
		setInputValue,
		handleReadingRegister,
		handleEnableReadingRegister,
		hasImageRenderError,
		setHasImageRenderError,
		isChangingStatus,
		handleEnableStatusChange,
		handleStatusChange,
		isRegisteringReading,
		notes,
	}
}

export { useBookDetails };