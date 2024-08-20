import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigationOrganism } from '@/components/organisms/tabNavigation';
import { BookPage } from '@/components/pages/book/page';
import { LoginPage } from '../../pages/login/page';

const Stack = createStackNavigator();

const StackNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false,
		}}
		initialRouteName='Login'
		>
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="Home" component={TabNavigationOrganism} />
			<Stack.Screen name="BookDetails" component={BookPage} />
		</Stack.Navigator>
	);
}

export { StackNavigation };