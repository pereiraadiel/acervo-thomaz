import { ScrollView, StatusBar, View } from "react-native";
import { RegisterFormOrganism } from "@/components/organisms/registerForm";
import { TitleAtom } from "@/components/atoms/title";
import { ParagraphAtom } from "@/components/atoms/paragraph";

const RegisterPageView = () => {
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
						Registrar-se
					</TitleAtom>
					<ParagraphAtom className="text-white text-center">
						Crie sua conta e comece a gerenciar seu acervo pessoal!
					</ParagraphAtom>
				</View>
				<RegisterFormOrganism />
			</ScrollView>
		</View>
  );
};

export { RegisterPageView };
