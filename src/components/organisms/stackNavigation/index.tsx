import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigationOrganism } from '@/components/organisms/tabNavigation';
import { BookPage } from '@/components/pages/book/page';
import { LoginPage } from '@/components/pages/login/page';
import { RegisterPage } from '@/components/pages/register/page';
import { RecoverPage } from '@/components/pages/recover/page';
import { ProfilePage } from '@/components/pages/profile/page';
import { BooksProvider } from '@/contexts/books.context';
import { BookProvider } from '@/contexts/book.context';

const Stack = createStackNavigator();

const StackNavigation = () => {
	const TabNav = () => {
		return (
			<BooksProvider>
				<BookProvider>
					<TabNavigationOrganism />
				</BookProvider>
			</BooksProvider>
		)
	}

	const Book = () => {
		return (
			<BookProvider>
				<BookPage />
			</BookProvider>
		)
	}

	return (
		<Stack.Navigator screenOptions={{
			headerShown: false,
		}}
		initialRouteName='Login'
		>
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="Profile" component={ProfilePage} />
			<Stack.Screen name="Register" component={RegisterPage} />
			<Stack.Screen name="Recover" component={RecoverPage} />
			<Stack.Screen name="Home" component={TabNav} />
			<Stack.Screen name="BookDetails" component={Book} />
		</Stack.Navigator>
	);
}

export { StackNavigation };