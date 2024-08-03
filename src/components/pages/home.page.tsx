import React from 'react';
import { View, ScrollView } from "react-native";
import { BookCollection } from '../organisms/book-collection.organism';
import useBooks from '../../hooks/useBooks.hook';

const HomePage = () => {
  const {readedBooks, notReadedBooks, abandonedBooks } = useBooks()
  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView>
        <BookCollection title='Lidos' description='Livros que possuo e já foram lidos pelo menos uma vez' books={readedBooks}/>
        <BookCollection title='Não Lidos' description='Livros que possuo mas ainda não li' books={notReadedBooks}/>
        <BookCollection title='Abandonados' description='Livros que possuo, comecei a ler mas não conclui' books={abandonedBooks}/>
      </ScrollView>
    </View>
  );
}

export { HomePage };
