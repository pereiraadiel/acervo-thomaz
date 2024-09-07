import React from 'react';
import useBooks, { BooksState } from '@/hooks/useBooks.hook';
import { MainTemplate } from '@/components/templates/main.template';
import { TabsMolecule } from '@/components/molecules/tabs';
import { BookListOrganism } from '@/components/organisms/bookList';
import { View } from 'react-native';

const HomeView : React.FC<BooksState> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks,
  readingBooks,
  allBooks
}) => {
  return (
    <MainTemplate headerTitle={'Sua Estante'} headerSubtitle={'Encontre um livro da sua estante'}>
      <TabsMolecule initialTab='reading' tabs={
        [
          {name: 'all', component: <BookListOrganism books={allBooks}/>},
          {name: 'reading', component: <BookListOrganism books={readingBooks}/>},
          {name: 'not-readed', component:  <BookListOrganism books={notReadedBooks}/>},
          {name: 'abandoned', component:  <BookListOrganism books={abandonedBooks}/>},
          {name: 'readed', component:  <BookListOrganism books={readedBooks}/>},
        ]
      }
      />
			<View className='mb-20'></View>
    </MainTemplate>
  );
}

export { HomeView };
