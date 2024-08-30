import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer, useNavigation } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { StackNavigation } from "@/components/organisms/stackNavigation"
import { useFonts, Lemon_400Regular, DaysOne_400Regular, Lexend_400Regular, Lexend_700Bold } from '@expo-google-fonts/dev';
import useAuth from "@/hooks/useAuth.hook"
import { useStorage } from "@/hooks/stores/useStorage.hook"
import { useEffect, useState } from "react"
import { AuthModel } from "@/models/auth.model"
import { authService } from "@/services/auth/auth.service"

const Application = () => {
  const [retrivingAuthFromStorage, setRetrivingAuthFromStorage] = useState(true)
  
  const Storage = useStorage();
  const { setAuth } = useAuth();
  const { navigate } = useNavigation<any>();
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
      if(auth) {
        authService.verifyToken(auth.accessToken).then(result => {
          if(result) setAuth(auth)
          authService.refreshToken(auth.refreshToken).then(result => {
            if(result) setAuth(result)
          }).catch(err => {
            Storage.clean().then(() => navigate('Login'))
          })
        })
      }
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
      <StackNavigation/>
      <StatusBar style="light" />
    </ToastProvider>
  )
}

export default function App() { 
  return (
    <NavigationContainer>
      <Application/>
    </NavigationContainer>
  )
}
