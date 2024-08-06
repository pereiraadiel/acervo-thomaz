import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { BookCollection } from '@/components/organisms/book-collection.organism';
import { MainTemplate } from '@/components/templates/main.template';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks
}) => {
  return (
    <MainTemplate>
      <BookCollection title='Lidos' description='Livros que possuo e já foram lidos pelo menos uma vez' books={readedBooks}/>
      <BookCollection title='Não Lidos' description='Livros que possuo mas ainda não li' books={notReadedBooks}/>
      <BookCollection title='Abandonados' description='Livros que possuo, comecei a ler mas não conclui' books={abandonedBooks}/>
    </MainTemplate>
  );
}

export { HomeView };
