import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { LoginError, LoginFormFields } from "./interface";
import useAuth from "@/hooks/useAuth.hook";
import { useStorage } from "@/hooks/stores/useStorage.hook";

const useLoginFormOrganism = () => {
	const [formFields, setFormFields] = useState<LoginFormFields>({ email: '', password: '' });
	const [error, setError] = useState<LoginError>({ email: '', password: '' });

	const { navigate } = useNavigation<any>()

	const { auth, authenticate, fetching: loading, error: authError } = useAuth();
	const Storage = useStorage();

	const handleResetPassword = () => {
		navigate('Recover');
	}

	const handleSignUp = () => {
		navigate('Register');
	}

	const handleSignIn = () => {
		if(formFields.email.length === 0) {
			setError({...error, email: 'O email precisa ser preenchido' });
			return;
		}
		if(formFields.password.length === 0) {
			setError({ ...error , password: 'A senha precisa ser preenchida' });
			return;
		}
		authenticate(formFields.email, formFields.password);
	}

	useEffect(() => {
		if(formFields.email.length > 0 && formFields.password.length > 0) {
			setError({ email: '', password: '' });
		}
	},[ formFields])

	useEffect(() => {
		if(auth) {
			const hourInSeconds = 60 * 60;
			const daysInSeconds = 24 * hourInSeconds;
			Storage.store('auth', auth, 90 * daysInSeconds);
			navigate('Home');
		}
	}, [auth])

	useEffect(() => {
		console.log(authError)
		if(authError) {
			setError({ email: authError.email || '', password: authError.password || '' });
		}
	}, [authError])

	const methods = {
		formFields,
		setFormFields,
		error,
		loading,
		handleResetPassword,
		handleSignUp,
		handleSignIn,
	}

	return methods;
}

export { useLoginFormOrganism }