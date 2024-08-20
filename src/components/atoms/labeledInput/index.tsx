import { useEffect } from "react";
import { useLabeledInputAtom } from "./hook";
import { LabeledInputAtomProps } from "./interface";
import { LabeledInputAtomView } from "./view";
import { KeyboardTypeOptions } from "react-native";

const LabeledInputAtom: React.FC<LabeledInputAtomProps> = ({
	className,
	label,
	variant = 'name',
	error,
	ref,
	...rest
}) => {
	
	const { Icon, color, setError } = useLabeledInputAtom(variant)

	useEffect(() => {
		setError(error);
	}, [error])

  const keyboardType: KeyboardTypeOptions = 
		variant === 'email' || variant === 'username' 
			? 'email-address' 
			:	'default'


	const methods = {
		label,
		className,
		Icon,
		color,
		error,
		keyboardType,
		variant,
		...rest
	}

	return <LabeledInputAtomView {...methods} ref={ref} />;
}

export { LabeledInputAtom }