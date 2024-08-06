import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '@/components/pages/home/page';
import { colors } from '@/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BookScanPage } from '../pages/book-scan/page';
import { WishlistPage } from '../pages/wishlist/page';

const Tab = createBottomTabNavigator();

const TabNavigationOrganism = () => {
	return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: colors.green[400],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle:{
          width: 32,
          height: 32,
        },
        tabBarStyle: {
          backgroundColor: colors.gray[600],
        }
      }}
      >
      <Tab.Screen name="Home" component={HomePage}  options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
        ),
        }}/>
      <Tab.Screen name="Scan" component={BookScanPage}  options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="line-scan" color={color} size={size} />
        ),
        }}/>
      <Tab.Screen name="Wishlist" component={WishlistPage}  options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="tag-heart" color={color} size={size} />
        ),
        }}/>
    </Tab.Navigator>
	)
}

export { TabNavigationOrganism };
