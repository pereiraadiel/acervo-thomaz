import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"

type LoginError = {
	email: string;
	password: string;
}

const useLoginFormOrganism = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<LoginError>({ email: '', password: '' });
	const [loading, setLoading] = useState<boolean>(false);

	const { navigate } = useNavigation<any>()

	const handleResetPassword = () => {}

	const handleSignUp = () => {}

	const handleSignIn = () => {
		navigate('Home');
		// setLoading(true);
		// setTimeout(() => {
		// 	setLoading(false);
		// 	setError({ email: 'Email is required', password: 'Password is required' });
		// }, 1000);
	}

	useEffect(() => {
		if(email !== '' || password !== '') {
			setError({ email: '', password: '' });
		}
	},[ email, password])

	const methods = {
		email,
		setEmail,
		password,
		setPassword,
		error,
		loading,
		handleResetPassword,
		handleSignUp,
		handleSignIn,
	}

	return methods;
}

export { useLoginFormOrganism }