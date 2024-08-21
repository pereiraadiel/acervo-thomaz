import { ScrollView, StatusBar, View } from "react-native";
import { RegisterFormOrganism } from "@/components/organisms/registerForm";
import { TitleAtom } from "@/components/atoms/title";
import { ParagraphAtom } from "@/components/atoms/paragraph";
import { MainTemplate } from "../../templates/main.template";

const ProfilePageView = () => {
  const statusBarHeight = (StatusBar.currentHeight || 0) + 8;

  return (
		<MainTemplate headerTitle="Meu Perfil" headerVariant="profile">
			<View className="h-full">
				<ScrollView
					style={{ paddingTop: statusBarHeight }}
					contentContainerStyle={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<TitleAtom className="text-xl text-left">
						Bem vindo @nomeusuario
					</TitleAtom>
					<ParagraphAtom className="text-white text-center">
						Aqui você pode editar informações de sua conta!
					</ParagraphAtom>
					<RegisterFormOrganism editingExisting />
				</ScrollView>
			</View>
		</MainTemplate>
  );
};

export { ProfilePageView };
