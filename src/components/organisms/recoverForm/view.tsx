import React, { useRef } from "react";
import { View, TextInput } from "react-native";
import { RecoverFormOrganismViewProps } from "./interface";
import { LabeledInputAtom } from "@/components/atoms/labeledInput";
import { LogoAtom } from "@/components/atoms/logo";
import { ButtonAtom } from "@/components/atoms/button";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { LoadingAtom } from "@/components/atoms/loading";

const RecoverFormOrganismView: React.FC<RecoverFormOrganismViewProps> = ({
	handleResetPassword,
	handleRecoverAccount,
	currentStep,
	handleSignIn,
	error,
	formFields,
	setFormFields,
	loading
}) => {

	const emailInputRef = useRef<TextInput>(null);
	const codeInputRef = useRef<TextInput>(null);
	const passwordInputRef = useRef<TextInput>(null);

	const buttonAction = {
		0: handleRecoverAccount,
		1: handleSignIn
	}
	const buttonText = {
		0: 'Recuperar minha conta',
		1: 'Alterar minha senha'
	}

	if(loading) return <LoadingAtom/>

	return (
		<View className="flex items-center w-full">
			<View className="w-40 h-40 rounded-full bg-gray-500 flex items-center justify-center z-10">
				<LogoAtom className="my-2"/>
			</View>
			<View className=" bg-gray-500 w-full p-4 rounded-t-[64px] pt-20 z-0 -mt-20">
				<LabeledInputAtom 
					label="Usuário/email" 
					variant="username" 
					className="mt-2"
					value={formFields.email}
					error={error.email}
					onChangeText={value => setFormFields({ ...formFields, email: value })}
					onFocus={() => emailInputRef.current?.focus()}
					ref={emailInputRef}
					editable={currentStep === 0}
					returnKeyType="next"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && handleRecoverAccount()} 
					onSubmitEditing={handleRecoverAccount} 
					blurOnSubmit={false} 
				/>
				{currentStep === 1 && (
					<>
						<LabeledInputAtom 
							label="Código de recuperação" 
							variant="code" 
							className="mt-2"
							value={formFields.reset?.code}
							error={error.reset?.code}
							onChangeText={value => setFormFields({ ...formFields, reset: { password: formFields.reset?.password || '', code: value } })}
							onFocus={() => codeInputRef.current?.focus()}
							ref={codeInputRef}
							returnKeyType="next"
							onKeyPress={() => codeInputRef.current?.focus()} 
							onSubmitEditing={() => passwordInputRef.current?.focus()} 
							blurOnSubmit={false} 
						/>
						
						<SubtitleAtom className="text-gray-800 mb-2" onPress={handleRecoverAccount}>não recebeu o código? clique para solicitar novamente!</SubtitleAtom>
						
						<LabeledInputAtom 
							label="Crie uma nova senha" 
							variant="password" 
							className="mt-2"
							value={formFields.reset?.password}
							error={error.reset?.password}
							onChangeText={value => setFormFields({ ...formFields, reset: { code: formFields.reset?.code || '', password: value } })}
							onFocus={() => passwordInputRef.current?.focus()}
							ref={passwordInputRef}
							returnKeyType="next"
							onKeyPress={key => key.nativeEvent.key === 'Enter' && handleSignIn()} 
							onSubmitEditing={handleSignIn} 
							blurOnSubmit={false} 
						/>
					</>
				)}
				<ButtonAtom className="mt-6" title={buttonText[currentStep]} onPress={buttonAction[currentStep]}/>
				
				<SubtitleAtom className="text-gray-800 my-2 text-center" onPress={handleSignIn}>Acessar outra conta</SubtitleAtom>
			</View>
		</View>
	)
}

export { RecoverFormOrganismView };
