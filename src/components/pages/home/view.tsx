import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { MainTemplate } from '@/components/templates/main.template';
import { TabsMolecule } from '@/components/molecules/tabs';
import { BookListOrganism } from '@/components/organisms/bookList';
import { BookDetailsMolecule } from '../../molecules/bookDetails';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks,
  readingBooks
}) => {
  return (
    <MainTemplate headerTitle={'Sua Estante'} headerSubtitle={'Encontre um livro da sua estante'}>
      {/* <TabsMolecule initialTab='reading' tabs={
        [
          {name: 'reading', component: <BookListOrganism books={readingBooks}/>},
          {name: 'abandoned', component:  <BookListOrganism books={abandonedBooks}/>},
          {name: 'not-readed', component:  <BookListOrganism books={notReadedBooks}/>},
          {name: 'readed', component:  <BookListOrganism books={readedBooks}/>},
        ]
      }
      /> */}
      <BookDetailsMolecule book={{
        author: '',
        categories: [],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        id: '123',
        imageUrl: 'https://www.lojadobolseiro.com.br/uploads/images/2020/01/34-1-1579485739mtu3otq4ntczoq.jpg',
        language: '',
        pageCount: 0,
        publishedDate: '',
        publisher: '',
        title: 'placeholder',
        status: 'reading',
        subtitle: 'Subtitulo'
      }}/>
    </MainTemplate>
  );
}

export { HomeView };
