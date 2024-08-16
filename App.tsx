import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { BooksProvider } from "@/contexts/books.context"
import { BookProvider } from "@/contexts/book.context"
import { TabNavigationOrganism } from "@/components/organisms/tab-navigation.organism"
import { useFonts, Lemon_400Regular, DaysOne_400Regular, Lexend_400Regular, Lexend_700Bold } from '@expo-google-fonts/dev';

export default function App() {  
  const [fontsLoaded] = useFonts({
    Lemon_400Regular,
    Lexend_400Regular,
    Lexend_700Bold,
    DaysOne_400Regular
  });

  if (!fontsLoaded) {}

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
