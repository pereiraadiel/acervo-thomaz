import React from 'react';
import useBooks from '@/hooks/useBooks.hook';
import { MainTemplate } from '@/components/templates/main.template';
import { TabsMolecule } from '@/components/molecules/tabs';
import { Text } from 'react-native';

const HomeView : React.FC<ReturnType<typeof useBooks>> = ({
	readedBooks,
	notReadedBooks,
	abandonedBooks
}) => {
  const Books = () => {
    return (
      <>
      </>
    )
  }
  return (
    <MainTemplate>
      <TabsMolecule initialTab='reading' tabs={
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
