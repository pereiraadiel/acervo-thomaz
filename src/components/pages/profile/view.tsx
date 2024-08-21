import { ScrollView, StatusBar, View } from "react-native";
import { RegisterFormOrganism } from "@/components/organisms/registerForm";
import { MainTemplate } from "@/components/templates/main.template";

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
					<RegisterFormOrganism editingExisting />
				</ScrollView>
			</View>
		</MainTemplate>
  );
};

export { ProfilePageView };
