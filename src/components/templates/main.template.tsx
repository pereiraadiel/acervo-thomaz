import { ScrollView, View } from "react-native";
import { HeaderMolecule } from "@/components/molecules/header";
import { cn } from "@/lib/utils";

interface MainTemplateProps {
	children: React.ReactNode;
	headerTitle?: string;
	headerSubtitle?: string;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, headerTitle, headerSubtitle }) => {
	return (
		<View className="flex-1 bg-gray-400">
			<HeaderMolecule title={headerTitle} color="secondary" subtitle={headerSubtitle} />
			<ScrollView className={cn(`flex-1 bg-gray-400 px-2`)}>
				{children}
			</ScrollView>
			{/* <Footer /> */}
		</View>
	);
};

export { MainTemplate };