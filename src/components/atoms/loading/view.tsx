import { AntDesign } from '@expo/vector-icons';
import { colors } from "@/styles/colors";
import { LoadingAtomViewProps } from "./interface";
import { View } from "react-native";

const LoadingAtomView: React.FC<LoadingAtomViewProps> = ({
  iconSize,
}) => {
  return (
    <View className="flex items-center justify-cente animate-spin">
      <AntDesign
        name="loading2"
        size={iconSize}
        color={colors.orange[500]}
      />
    </View>
  );
};

export { LoadingAtomView };
