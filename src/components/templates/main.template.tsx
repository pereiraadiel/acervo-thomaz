import { ScrollView, View } from "react-native";
import { HeaderMolecule } from "../molecules/header.molecule";
import { cn } from "../../lib/utils";

interface MainTemplateProps {
	children: React.ReactNode;
	headerTitle?: string;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, headerTitle }) => {
	return (
		<View className="flex-1 bg-gray-400">
			<HeaderMolecule title={headerTitle}/>
			<ScrollView className={cn(`flex-1 bg-gray-400 px-2`)}>
				{children}
			</ScrollView>
			{/* <Footer /> */}
		</View>
	);
};

export { MainTemplate };