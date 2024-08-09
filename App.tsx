import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { BooksProvider } from "@/contexts/books.context"
import { BookProvider } from "@/contexts/book.context"
import { TabNavigationOrganism } from "@/components/organisms/tab-navigation.organism"
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';
import { Lexend_400Regular, Lexend_700Bold } from '@expo-google-fonts/lexend';
import { DaysOne_400Regular } from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';

export default function App() {  
  const [fontsLoaded] = useFonts({
    Lemon_400Regular,
    Lexend_400Regular,
    Lexend_700Bold,
    DaysOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ToastProvider position="top">
      <BooksProvider>
        <BookProvider>
          <NavigationContainer theme={DarkTheme} >
            <TabNavigationOrganism/>
          </NavigationContainer>
        </BookProvider>
      </BooksProvider>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
