import React, { useRef } from "react";
import { View, TextInput } from "react-native";
import { LoginFormOrganismViewProps } from "./interface";
import { LabeledInputAtom } from "@/components/atoms/labeledInput";
import { LogoAtom } from "@/components/atoms/logo";
import { ButtonAtom } from "@/components/atoms/button";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { LoadingAtom } from "@/components/atoms/loading";

const LoginFormOrganismView: React.FC<LoginFormOrganismViewProps> = ({
	handleResetPassword,
	handleSignUp,
	handleSignIn,
	error,
	formFields,
	setFormFields,
	loading
}) => {

	const passwordInputRef = useRef<TextInput>(null);
	const emailInputRef = useRef<TextInput>(null);

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
					placeholder="Digite seu usuário ou email"
					className="mt-2"
					value={formFields.email}
					error={error.email}
					onChangeText={value => setFormFields({ ...formFields, email: value })}
					onFocus={() => emailInputRef.current?.focus()}
					ref={emailInputRef}
					returnKeyType="next"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && passwordInputRef.current?.focus()}
					onSubmitEditing={() => passwordInputRef.current?.focus()}
					blurOnSubmit={false} 
				/>
				<LabeledInputAtom 
					label="Senha" 
					variant="password"
					placeholder="Digite sua senha"
					className="mt-2"
					error={error.password}
					value={formFields.password}
					onChangeText={value => setFormFields({ ...formFields, password: value })}
					onFocus={() => passwordInputRef.current?.focus()}
					ref={passwordInputRef} 
					returnKeyType="done"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && handleSignUp()} 
					onSubmitEditing={handleSignUp} 
				/>
				<SubtitleAtom className="text-gray-800 my-2" onPress={handleResetPassword}>Esqueci minha senha</SubtitleAtom>
				
				<ButtonAtom className="mt-6" title="Autenticar-se" onPress={handleSignIn}/>
				
				<SubtitleAtom className="text-gray-800 my-2 text-center" onPress={handleSignUp}>Não tem uma conta? Cadastre-se</SubtitleAtom>
			</View>
		</View>
	)
}

export { LoginFormOrganismView };
