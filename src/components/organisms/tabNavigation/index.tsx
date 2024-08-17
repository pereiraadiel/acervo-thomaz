import { colors } from "@/styles/colors";
import { TabNavigationOrganismProps } from "./interface";
import { TabNavigationOrganismView } from "./view";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const TabNavigationOrganism: React.FC<TabNavigationOrganismProps> = () => {
	const screenOptions: BottomTabNavigationOptions = {
		tabBarActiveTintColor: colors.orange[600],
		tabBarInactiveTintColor: colors.gray[900],
		headerShown: false,
		tabBarLabelPosition: 'beside-icon',
		tabBarShowLabel: true,
		tabBarLabelStyle: {
			fontSize: 12.5,
			marginLeft: 0,
			fontWeight: 'bold',
		},
		tabBarIconStyle:{
			width: 40,
			height: 40,
		},
		tabBarStyle: {
			backgroundColor: colors.gray[600],
			shadowColor: colors.gray[700],
			shadowRadius: 8,
			shadowOpacity: 0.5,
			shadowOffset: {
				width: 0,
				height: 0,
			},
			width: '90%',
			height: 56,
			alignSelf: 'center',
			borderRadius: 28,
			position: 'absolute',
			bottom: 8,
			left: 0.5 * screenWidth,
			transform: [{ translateX: -0.45 * screenWidth }],  
		},	
	}

	
	return <TabNavigationOrganismView	screenOptions={screenOptions} />;
}

export { TabNavigationOrganism };