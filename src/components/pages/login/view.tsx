import { ScrollView, StatusBar, View } from "react-native";
import { LoginFormOrganism } from "@/components/organisms/loginFrom";
import { TitleAtom } from "@/components/atoms/title";
import { ParagraphAtom } from "@/components/atoms/paragraph";

const LoginPageView = () => {
  const statusBarHeight = (StatusBar.currentHeight || 0) + 8;

  return (
		<View className="bg-orange-600 h-full">
			<ScrollView
				style={{ paddingTop: statusBarHeight }}
				contentContainerStyle={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<View className="flex-1 mt-4">
					<TitleAtom className="text-3xl text-center">
						Autenticar-se
					</TitleAtom>
					<ParagraphAtom className="text-white text-center">
						Entre com as suas credenciais para acessar sua conta!
					</ParagraphAtom>
				</View>
				<LoginFormOrganism />
			</ScrollView>
		</View>
  );
};

export { LoginPageView };
