import { View } from "react-native"
import { AntDesign} from '@expo/vector-icons'
import { colors } from "@/styles/colors";

const LoadingAtom = () => {
	return (
		<View>
			<AntDesign name="loading2" size={24} color={colors.orange[500]} className="animation-spin" />
		</View>
	)
}

export { LoadingAtom };