import { Text, View } from "react-native"
import { LogoAtom } from "@/components/atoms/logo";

interface HeaderMoleculeProps {
	title?: string
}

const HeaderMolecule: React.FC<HeaderMoleculeProps> = ({title}) => {
	return (
		<View className={`bg-gray-500 w-full pt-10 pb-3 px-2 flex-row items-center ${title ? 'justify-between': 'justify-center'}`}>
			<LogoAtom/>
			{title && <Text className="text-white text-xl font-medium">{title}</Text>}
		</View>
	);
}

export { HeaderMolecule };