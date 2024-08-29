import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigationOrganism } from '@/components/organisms/tabNavigation';
import { BookPage } from '@/components/pages/book/page';
import { LoginPage } from '@/components/pages/login/page';
import { RegisterPage } from '@/components/pages/register/page';
import { RecoverPage } from '@/components/pages/recover/page';
import { ProfilePage } from '@/components/pages/profile/page';
import useAuth from '@/hooks/useAuth.hook';

const Stack = createStackNavigator();

const StackNavigation = () => {
	const { auth } = useAuth()
	return (
		<Stack.Navigator screenOptions={{
			headerShown: false,
		}}
		initialRouteName='Login'
		>
			{auth ? (
				<>
					<Stack.Screen name="Profile" component={ProfilePage} />
					<Stack.Screen name="BookDetails" component={BookPage} />
					<Stack.Screen name="Home" component={TabNavigationOrganism} />
				</>
			): (
				<>
					<Stack.Screen name="Login" component={LoginPage} />
					<Stack.Screen name="Recover" component={RecoverPage} />
					<Stack.Screen name="Register" component={RegisterPage} />
				</>
			)}
		</Stack.Navigator>
	);
}

export { StackNavigation };