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
import { useJwt } from "react-jwt"

const Application = () => {
  const [retrivingAuthFromStorage, setRetrivingAuthFromStorage] = useState(true);
  const { isExpired, reEvaluateToken} = useJwt('')
  
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
    const retrieveAndVerifyAuth = async () => {
      try {
        const auth = await Storage.get<AuthModel>('auth');
        console.log('App auth:', auth);
  
        if (!auth || !auth.accessToken.length) {
          return;
        }
  
        reEvaluateToken(auth.accessToken);
  
        if (isExpired) {
          const refreshedAuth = await authService.refreshToken(auth.refreshToken);
  
          if (!refreshedAuth) {
            throw new Error('Failed to refresh auth token');
          }
  
          await Storage.store('auth', refreshedAuth);
          setAuth(refreshedAuth);
        } else {
          setAuth(auth);
        }
      } catch (err) {
        console.error(err);
        await Storage.clean();
        navigate('Login');
      } finally {
        setRetrivingAuthFromStorage(false);
      }
    };
  
    retrieveAndVerifyAuth();
  }, []);
  
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
