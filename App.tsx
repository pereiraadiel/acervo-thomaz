import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/components/Toast"
import { BooksProvider } from "@/contexts/book.context"
import { ExternalBookProvider } from "@/contexts/external-book.context"
import { TabNavigationOrganism } from "@/components/organisms/tab-navigation.organism"
import useBarCode from "@/hooks/useBarCode.hook"

export default function App() {
  const {
    result: {
      data: isbn
    }
  } = useBarCode();
  
  return (
    <ToastProvider position="top">
      <BooksProvider>
        <ExternalBookProvider isbn={isbn}>
          <NavigationContainer theme={DarkTheme} >
            <TabNavigationOrganism/>
          </NavigationContainer>
        </ExternalBookProvider>
      </BooksProvider>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
