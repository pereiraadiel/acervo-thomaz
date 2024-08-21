import React, { useRef } from "react";
import { View, TextInput } from "react-native";
import { RegisterFormOrganismViewProps } from "./interface";
import { LabeledInputAtom } from "@/components/atoms/labeledInput";
import { LogoAtom } from "@/components/atoms/logo";
import { ButtonAtom } from "@/components/atoms/button";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { LoadingAtom } from "@/components/atoms/loading";

const RegisterFormOrganismView: React.FC<RegisterFormOrganismViewProps> = ({
	handleSignUp,
	handleSignIn,
	error,
	formFields,
	isEditable,
	editingExisting,
	setFormFields,
	loading
}) => {

	const passwordInputRef = useRef<TextInput>(null);
	const emailInputRef = useRef<TextInput>(null);
	const fullnameInputRef = useRef<TextInput>(null);
	const usernameInputRef = useRef<TextInput>(null);

	if(loading) return <LoadingAtom/>

	return (
		<View className="flex items-center w-full">
			{editingExisting === false && (
				<View className="w-40 h-40 rounded-full bg-gray-500 flex items-center justify-center z-10">
					<LogoAtom className="my-2"/>
				</View>
			)}

			<View className={`w-full p-4 rounded-t-[64px] pt-20 z-0 ${editingExisting ? '-mt-18': '-mt-20 bg-gray-500'}`}>
				<LabeledInputAtom 
					label="Nome completo" 
					variant="name" 
					className="mt-2"
					value={formFields.fullname}
					error={error.fullname}
					editable={isEditable}
					onChangeText={value => setFormFields({ ...formFields, fullname: value })}
					onFocus={() => fullnameInputRef.current?.focus()}
					ref={fullnameInputRef}
					returnKeyType="next"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && usernameInputRef.current?.focus()}
					onSubmitEditing={() => usernameInputRef.current?.focus()}
					blurOnSubmit={false} 
				/>
				<LabeledInputAtom 
					label="Usuário" 
					variant="username" 
					className="mt-2"
					value={formFields.username}
					error={error.username}
					editable={isEditable}
					onChangeText={value => setFormFields({ ...formFields, username: value })}
					onFocus={() => usernameInputRef.current?.focus()}
					ref={usernameInputRef}
					returnKeyType="next"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && emailInputRef.current?.focus()}
					onSubmitEditing={() => emailInputRef.current?.focus()}
					blurOnSubmit={false} 
				/>
				<LabeledInputAtom 
					label="Email" 
					variant="email" 
					className="mt-2"
					value={formFields.email}
					error={error.email}
					editable={isEditable && !editingExisting}
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
					className="mt-2"
					error={error.password}
					value={formFields.password}
					editable={isEditable && !editingExisting}
					onChangeText={value => setFormFields({ ...formFields, password: value })}
					onFocus={() => passwordInputRef.current?.focus()}
					ref={passwordInputRef} 
					returnKeyType="done"
					onKeyPress={key => key.nativeEvent.key === 'Enter' && handleSignUp()} 
					onSubmitEditing={handleSignUp} 
				/>
				
				{isEditable && (
					<>
						<ButtonAtom className="mt-6" title={editingExisting ? 'Salvar': 'Registrar-se'} onPress={handleSignUp}/>
						{editingExisting === false && (
							<SubtitleAtom className="text-gray-800 my-2 text-center" onPress={handleSignIn}>Já possui uma conta? Autentique-se</SubtitleAtom>
						)}
					</>
				)}
			</View>
		</View>
	)
}

export { RegisterFormOrganismView };
