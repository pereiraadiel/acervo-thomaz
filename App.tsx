import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { ToastProvider } from "@/components/Toast"

import { Profile } from "@/app/Profile"
import { HomePage } from "@/components/pages/home/page"
import { BooksProvider } from "./src/contexts/book.context"

export default function App() {
  return (
    <ToastProvider position="top">
      <BooksProvider>
        {/* <Profile /> */}
        <HomePage/>
      </BooksProvider>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
