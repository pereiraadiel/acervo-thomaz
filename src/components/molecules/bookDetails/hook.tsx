import { useEffect, useState, useMemo } from "react";
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
  const { book, setBook } = useBook();

  const notes = useMemo(() => {
    if (book) {
      return (book as any).notes.map((note: any) => ({
        content: note.content,
        date: note.createdAt
      })) || [];
    }
    return [];
  }, [book]);

  const onSubmit = async () => {
    if(inputValue === '') return;
    const toastContent = bookStatus === 'not-readed' || bookStatus === 'desired' || bookStatus === 'unknown' ? 'Anotação adicionada com sucesso' : 'Resenha adicionada com sucesso';
    const toastErrorContent = bookStatus === 'not-readed' || bookStatus === 'desired' || bookStatus === 'unknown' ? 'Ocorreu um erro ao adicionar anotação' : 'Ocorreu um erro ao adicionar resenha';
    if(book) {
      try {
        const result = await bookService.createNote(book.id, inputValue);
        addToast(toastContent, 'success');
        notes.push({
          content: inputValue,
          date: result.createdAt || new Date().toISOString()
        });
      } catch (err) {
        console.error('Error on create note', err);
        addToast(toastErrorContent, 'error');
      }
    }
    setInputValue('');
  }

  const handleReadingRegister = async (id:string, readedPageCount: number) => {
    setIsRegisteringReading(false)
    try {
      await bookService.readingRegister(id, readedPageCount);
      if(book) setBook({...book, readedPageCount, progress: Number(((readedPageCount / book.pageCount) * 100).toFixed(2))});
      addToast('Leitura registrada com sucesso', 'success');
    } catch {
      addToast('Ocorreu um erro ao registrar leitura', 'error');
    }
  }

  const handleEnableReadingRegister = () => {
    setIsRegisteringReading(true);
  }

  const handleEnableStatusChange = () => {
    setIsChangingStatus(true);
  }

  const handleStatusChange = async (status: BookStatus) => {
    if(book) {
      try {
        await bookService.changeStatus(book.id, status);
        addToast('Status do livro alterado com sucesso', 'success');
        setBook({...book, status });
      } catch {
        addToast('Ocorreu um erro ao alterar status do livro', 'error');
      }
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