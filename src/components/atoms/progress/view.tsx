import React from "react";
import { View, Text } from "react-native";
import { ProgressAtomViewProps } from "./interface";
import { Svg, Circle } from "react-native-svg";
import { colors } from "@/styles/colors";

const LinearProgress: React.FC<ProgressAtomViewProps> = ({ progress = 0 }) => {
	const baseWidthInPixels = 160;
  const progressWidthInPixels = (baseWidthInPixels * progress) / 100;

  return (
		<>
			<View className="w-40 bg-gray-700 h-1 relative">
				<View
					style={{ width: progressWidthInPixels }}
					className="bg-green-500 h-1 absolute left-0 top-0"
				/>
			</View>
			<Text className="text-green-500 font-bold mt-1">{progress}%</Text>
		</>
  );
}

const CircularProgress: React.FC<ProgressAtomViewProps> = ({ progress = 0 }) => {
	const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
			<View className="relative">
				<Svg width={50} height={50}>
					<Circle
						cx="25"
						cy="25"
						r={radius}
						stroke={colors.gray[700]}
						strokeWidth="4"
						fill="none"
					/>
					<Circle
						cx="25"
						cy="25"
						r={radius}
						stroke={colors.green[500]}
						strokeWidth="4"
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
					/>
				</Svg>
				{<Text className="text-green-500 font-bold absolute top-5 left-3">{progress}%</Text>}
			</View>
    );
}

const ProgressAtomView: React.FC<ProgressAtomViewProps> = ({
  variant = "default",
  progress = 0,
}) => {
	return variant === "circle" 
		? <CircularProgress progress={progress}/>
		: <LinearProgress progress={progress}/>;

  
};

export { ProgressAtomView };
