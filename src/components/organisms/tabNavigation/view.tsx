import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '@/components/pages/home/page';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { WishlistPage } from '@/components/pages/wishlist/page';
import { DiscoverPage } from '@/components/pages/discover/page';
import { RootTabNavigationParamList, TabNavigationOrganismViewProps } from './interface';

const Tab = createBottomTabNavigator<RootTabNavigationParamList>();

const TabNavigationOrganismView: React.FC<TabNavigationOrganismViewProps> = ({screenOptions}) => {
	return (
    <Tab.Navigator 
      initialRouteName='Estante'
      screenOptions={screenOptions}
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

export { TabNavigationOrganismView };
