import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { StackNavigation } from "@/components/organisms/stackNavigation"
import { useFonts, Lemon_400Regular, DaysOne_400Regular, Lexend_400Regular, Lexend_700Bold } from '@expo-google-fonts/dev';
import useAuth from "@/hooks/useAuth.hook"
import { useStorage } from "@/hooks/stores/useStorage.hook"
import { useEffect, useState } from "react"
import { AuthModel } from "@/models/auth.model"

export default function App() { 
  const [retrivingAuthFromStorage, setRetrivingAuthFromStorage] = useState(true)

  const Storage = useStorage();
  const { setAuth } = useAuth(); 
  const [fontsLoaded] = useFonts({
    Lemon_400Regular,
    Lexend_400Regular,
    Lexend_700Bold,
    DaysOne_400Regular
  });

  useEffect(() => {
    Storage.get<AuthModel>('auth')
    .then(auth => {
      console.log('App auth:', auth)
      if(auth) setAuth(auth)
    })
    .catch(err => console.error(err))
    .finally(() => setRetrivingAuthFromStorage(false));
  }, [])

  if (!fontsLoaded || retrivingAuthFromStorage) {
    // return splash screen
    return null;
  }

  return (
    <ToastProvider position="top">
      <NavigationContainer theme={DarkTheme} >
        <StackNavigation/>
      </NavigationContainer>
      <StatusBar style="light" />
    </ToastProvider>
  )
}
