import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { BookCollection } from '@/components/organisms/book-collection.organism';
import { MainTemplate } from '@/components/templates/main.template';
import { BadgeAtom } from '../../atoms/badge';
import { TabsMolecule } from '../../molecules/tabs';
import { Text } from 'react-native';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks
}) => {
  const Books = () => {
    return (
      <>
        <BookCollection title='Lidos' description='Livros que possuo e já foram lidos pelo menos uma vez' books={readedBooks}/>
        <BookCollection title='Não Lidos' description='Livros que possuo mas ainda não li' books={notReadedBooks}/>
        <BookCollection title='Abandonados' description='Livros que possuo, comecei a ler mas não conclui' books={abandonedBooks}/>
      </>
    )
  }
  return (
    <MainTemplate>
      <TabsMolecule initialTab='readed' tabs={
        [
          {name: 'reading', component: <Text className='text-white'>Lendo</Text>},
          {name: 'abandoned', component: <Text className='text-white'>Abandonados</Text>},
          {name: 'not-readed', component: <Text className='text-white'>Não lidos</Text>},
          {name: 'readed', component: <Text className='text-white'>Lidos</Text>},
        ]
      }/>
    </MainTemplate>
  );
}

export { HomeView };
