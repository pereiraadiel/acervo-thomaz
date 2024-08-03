import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { ToastProvider } from "@/components/Toast"

import { Profile } from "@/app/Profile"
import { HomePage } from "./src/components/pages/home.page"

export default function App() {
  return (
    <ToastProvider position="top">
      {/* <Profile /> */}
      <HomePage/>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
