import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { RegisterError, RegisterFormFields } from "./interface";

const useRegisterFormOrganism = (editingExisting: boolean = false) => {
	const [formFields, setFormFields] = useState<RegisterFormFields>({ email: '', password: '', username: '', fullname: '' });
	const [error, setError] = useState<RegisterError>({ email: '', password: '', username: '', fullname: '' });
	const [loading, setLoading] = useState<boolean>(false);

	const { navigate } = useNavigation<any>()

	const handleResetPassword = () => {}

	const handleSignUp = () => {
		// if(editingExisting) {
		// 	// enviar formulario para editar usuario ja existente ( reutilizando esse componente na tela de cadastro e de perfil do usuario)
		// 	// retornar sem navegar para outra tela
		// }

		navigate('Login');
	}

	const handleSignIn = () => {
		navigate('Login');
	}

	useEffect(() => {
		if(formFields.email.length > 0 && formFields.password.length > 0
			&& formFields.username.length > 0 && formFields.fullname.length > 0
		) {
			setError({ email: '', password: '', username: '', fullname: '' });
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

export { useRegisterFormOrganism }