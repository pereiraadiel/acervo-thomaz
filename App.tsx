import "@/styles/global.css"

import { StatusBar } from "expo-status-bar"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { ToastProvider } from "@/contexts/toast.context"
import { StackNavigation } from "@/components/organisms/stackNavigation"
import useAuth from "@/hooks/useAuth.hook"
import { useFonts, Lemon_400Regular, DaysOne_400Regular, Lexend_400Regular, Lexend_700Bold } from '@expo-google-fonts/dev';

export default function App() { 
  const { fetching } = useAuth() 
  const [fontsLoaded] = useFonts({
    Lemon_400Regular,
    Lexend_400Regular,
    Lexend_700Bold,
    DaysOne_400Regular
  });

  if (!fontsLoaded || fetching) {
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
