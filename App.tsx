import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { BooksProvider } from "@/contexts/book.context"
import { ExternalBookProvider } from "@/contexts/external-book.context"
import { TabNavigationOrganism } from "@/components/organisms/tab-navigation.organism"

export default function App() {  
  return (
    <ToastProvider position="top">
      <BooksProvider>
        <ExternalBookProvider>
          <NavigationContainer theme={DarkTheme} >
            <TabNavigationOrganism/>
          </NavigationContainer>
        </ExternalBookProvider>
      </BooksProvider>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
