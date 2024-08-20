import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { MainTemplate } from '@/components/templates/main.template';
import { TabsMolecule } from '@/components/molecules/tabs';
import { BookListOrganism } from '@/components/organisms/bookList';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks,
  readingBooks
}) => {
  return (
    <MainTemplate headerTitle={'Sua Estante'} headerSubtitle={'Encontre um livro da sua estante'}>
      <TabsMolecule initialTab='reading' tabs={
        [
          {name: 'reading', component: <BookListOrganism books={readingBooks}/>},
          {name: 'abandoned', component:  <BookListOrganism books={abandonedBooks}/>},
          {name: 'not-readed', component:  <BookListOrganism books={notReadedBooks}/>},
          {name: 'readed', component:  <BookListOrganism books={readedBooks}/>},
        ]
      }
      />
    </MainTemplate>
  );
}

export { HomeView };
