import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '@/components/pages/home/page';
import { colors } from '@/styles/colors';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { WishlistPage } from '@/components/pages/wishlist/page';
import { DiscoverPage } from '@/components/pages/discover/page';
import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabNavigationOrganism = () => {
	return (
    <Tab.Navigator 
      initialRouteName='Estante'
      screenOptions={{
        tabBarActiveTintColor: colors.green[400],
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
        
      }}
      >
      <Tab.Screen name="Estante" component={HomePage}  options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
        ),
        }}/>
      <Tab.Screen name="Descobrir" component={DiscoverPage}  options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="find" color={color} size={size} />
        ),
        }}/>
      <Tab.Screen name="Desejados" component={WishlistPage}  options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="tag-heart" color={color} size={size} />
        ),
        }}/>
    </Tab.Navigator>
	)
}

export { TabNavigationOrganism };
