import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { LoginError, LoginFormFields } from "./interface";

const useLoginFormOrganism = () => {
	const [formFields, setFormFields] = useState<LoginFormFields>({ email: '', password: '' });
	const [error, setError] = useState<LoginError>({ email: '', password: '' });
	const [loading, setLoading] = useState<boolean>(false);

	const { navigate } = useNavigation<any>()

	const handleResetPassword = () => {
		navigate('Recover');
	}

	const handleSignUp = () => {
		navigate('Register');
	}

	const handleSignIn = () => {
		navigate('Home');
	}

	useEffect(() => {
		if(formFields.email.length > 0 && formFields.password.length > 0) {
			setError({ email: '', password: '' });
		}
	},[ formFields])

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