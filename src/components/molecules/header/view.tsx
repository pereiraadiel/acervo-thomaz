import React from "react";
import { View, StatusBar } from "react-native";
import { Ionicons, Octicons } from '@expo/vector-icons'
import { HeaderMoleculeViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { useNavigation } from "@react-navigation/native";

const HeaderMoleculeView: React.FC<HeaderMoleculeViewProps> = ({
  title,
  subtitle,
  variant,
  color,
  className
}) => {
  const statusBarHeight = (StatusBar.currentHeight  || 0) + 8;

  const { goBack, navigate } = useNavigation<any>();

  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className={`${color === "accent" ? "bg-orange-600" : "bg-gray-500"} flex flex-row gap-2 justify-between pb-2 px-4 ${className}`}
    >
			<View className="flex-row items-center gap-2">
				{variant !== "default" && (
					<View className="py-2 pr-2" onTouchEnd={() => goBack()}>
						<Ionicons name="chevron-back" size={24} color="white" />
					</View>
				)}

				<View>
					<TitleAtom>{title}</TitleAtom>
					{subtitle && <SubtitleAtom>{subtitle}</SubtitleAtom> }
				</View>
			</View>

      {variant !== 'profile' && (
        <View className="flex-row mr-4 items-center py-2" onTouchEnd={() => navigate('Profile')}>
          <Octicons name="person" size={24} color="white" />
        </View>
      )}
    </View>
  );
};

export { HeaderMoleculeView };
