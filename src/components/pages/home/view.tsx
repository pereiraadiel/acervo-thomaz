import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { BookCollection } from '@/components/organisms/book-collection.organism';
import { MainTemplate } from '@/components/templates/main.template';
import { BadgeAtom } from '../../atoms/badge';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks
}) => {
  return (
    <MainTemplate>
      <BadgeAtom variant='search'/>
      <BadgeAtom variant='abandoned'/>
      <BadgeAtom variant='desired'/>
      <BadgeAtom variant='not-readed'/>
      <BadgeAtom variant='readed'/>
      <BadgeAtom variant='reading'/>
      <BadgeAtom variant='save'/>
      <BadgeAtom variant='scan-barcode'/>
      <BookCollection title='Lidos' description='Livros que possuo e já foram lidos pelo menos uma vez' books={readedBooks}/>
      <BookCollection title='Não Lidos' description='Livros que possuo mas ainda não li' books={notReadedBooks}/>
      <BookCollection title='Abandonados' description='Livros que possuo, comecei a ler mas não conclui' books={abandonedBooks}/>
    </MainTemplate>
  );
}

export { HomeView };
