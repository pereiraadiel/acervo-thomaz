import { ScrollView, View } from "react-native";
import { HeaderMolecule } from "@/components/molecules/header";
import { cn } from "@/lib/utils";

interface MainTemplateProps {
	children: React.ReactNode;
	headerTitle?: string;
	headerSubtitle?: string;
	headerVariant?: 'default' | 'with-back';
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, headerTitle, headerSubtitle, headerVariant }) => {
	return (
		<View className="flex-1 bg-gray-400 relative">
			<HeaderMolecule 
				title={headerTitle} 
				color="secondary" 
				subtitle={headerSubtitle} 
				variant={headerVariant}
			/>
			<ScrollView className={cn(`flex-1 bg-gray-400`)}>
				{children}
			</ScrollView>
			{/* <Footer /> */}
		</View>
	);
};

export { MainTemplate };