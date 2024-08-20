import React from "react";
import { View, StatusBar } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { HeaderMoleculeViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";
import { SubtitleAtom } from "@/components/atoms/subtitle";

const HeaderMoleculeView: React.FC<HeaderMoleculeViewProps> = ({
  title,
  subtitle,
  variant,
  color,
  className
}) => {
  const statusBarHeight = (StatusBar.currentHeight  || 0) + 8;

  return (
    <View
      style={{ paddingTop: statusBarHeight }}
      className={`${color === "accent" ? "bg-orange-600" : "bg-gray-500"} flex flex-row gap-2 justify-between pb-2 px-4 ${className}`}
    >
			<View className="flex-row items-center gap-2">
				{variant === "with-back" && (
					<View className="py-2 pr-2">
						<Ionicons name="chevron-back" size={24} color="white" />
					</View>
				)}

				<View>
					<TitleAtom>{title}</TitleAtom>
					<SubtitleAtom>{subtitle}</SubtitleAtom>
				</View>
			</View>

      <View className="flex-row mr-4 items-center py-2">
        <AntDesign name="user" size={24} color="white" />
      </View>
    </View>
  );
};

export { HeaderMoleculeView };
