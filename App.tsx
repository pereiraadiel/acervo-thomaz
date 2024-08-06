import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { ToastProvider } from "@/components/Toast"
import { BooksProvider } from "@/contexts/book.context"
import { TabNavigationOrganism } from "@/components/organisms/tab-navigation.organism"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <ToastProvider position="top">
      <BooksProvider>
        <NavigationContainer theme={DarkTheme} >
          <TabNavigationOrganism/>
        </NavigationContainer>
      </BooksProvider>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
