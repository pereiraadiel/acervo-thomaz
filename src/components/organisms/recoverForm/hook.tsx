import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { RecoverError, RecoverFormFields } from "./interface";
import useToast from "@/hooks/useToast.hook";
import { authService } from "../../../services/auth/auth.service";

const useRecoverFormOrganism = () => {
	const [formFields, setFormFields] = useState<RecoverFormFields>({ email: '' });
	const [error, setError] = useState<RecoverError>({ email: '' });
	const [loading, setLoading] = useState<boolean>(false);
	const [currentStep, setCurrentStep] = useState<0 | 1>(0);

	const { navigate } = useNavigation<any>()
	const { addToast } = useToast()

	const handleResetPassword = () => {
		try {
			setLoading(true);
			if(!formFields.reset) return;
			if(formFields.reset.code.length === 0) {
				setError({ ...error, reset: { password: '', code: 'Código de recuperação é obrigatório!' } });
				return;
			}
			if(formFields.reset.password.length < 6) {
				setError({ ...error, reset: { password: 'A senha deve conter pelo menos 6 caracteres', code: '' } });
				return;
			}
			authService.resetPassword(formFields.email, formFields.reset.code, formFields.reset.password).then(() => {
				addToast('Senha alterada com sucesso!', 'success');
				navigate('Login');
			});
		} catch (error) {
			addToast('Erro ao alterar senha!', 'error');
		}
		finally {
			setLoading(false);
		}
	}

	const handleRecoverAccount = () => {
		setFormFields({ ...formFields, reset: { code: '', password: '' } });
		setLoading(true);
		authService.recoverAccount(formFields.email).then(() => {
			setCurrentStep(1);
			setError({ email: '', reset: { code: '', password: '' } });
			addToast('Um código de recuperação foi enviado ao email cadastrado!', 'info')
		}).catch(() => {
			addToast('Erro ao enviar código de recuperação!', 'error')
		}).finally(() => {
			setLoading(false);
		});
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