import { ScrollView, StatusBar, View } from "react-native";
import { RecoverFormOrganism } from "@/components/organisms/recoverForm";
import { TitleAtom } from "@/components/atoms/title";
import { ParagraphAtom } from "@/components/atoms/paragraph";

const RecoverPageView = () => {
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
						Recuperar conta
					</TitleAtom>
					<ParagraphAtom className="text-white text-center">
						Informe seu e-mail ou nome de usuário{'\n'}para recuperar sua conta!
					</ParagraphAtom>
				</View>
				<RecoverFormOrganism />
			</ScrollView>
		</View>
  );
};

export { RecoverPageView };
