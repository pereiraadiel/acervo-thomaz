import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { RecoverError, RecoverFormFields } from "./interface";

const useRecoverFormOrganism = () => {
	const [formFields, setFormFields] = useState<RecoverFormFields>({ email: '' });
	const [error, setError] = useState<RecoverError>({ email: '' });
	const [loading, setLoading] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<0 | 1>(0);

	const { navigate } = useNavigation<any>()

	const handleResetPassword = () => {
		// todo: implement reset password
		navigate('Login');
	}

	const handleRecoverAccount = () => {
		setFormFields({ ...formFields, reset: { code: '', password: '' } });
		setError({ email: '', reset: { code: '', password: '' } });
		setCurrentStep(1);
	}

	const handleSignIn = () => {
		navigate('Login');
	}

	useEffect(() => {
		if(formFields.email.length > 0 ) {
			setError({ email: '' });
		}
	},[ formFields])

	const methods = {
		formFields,
		setFormFields,
		currentStep,
		error,
		loading,
		handleResetPassword,
		handleRecoverAccount,
		handleSignIn,
	}

	return methods;
}

export { useRecoverFormOrganism }