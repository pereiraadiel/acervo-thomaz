import { useEffect } from "react";
import { useInputAtom } from "./hook";
import { InputAtomProps } from "./interface";
import { InputAtomView } from "./view";

const InputAtom: React.FC<InputAtomProps> = ({
	className,
	label,
	variant = 'name',
	error,
	...rest
}) => {
	
	const { Icon, setVariant, color, setError } = useInputAtom()

	useEffect(() => {
		setVariant(variant)
	}, [variant]);

	useEffect(() => {
		setError(error);
	}, [error])

	const methods = {
		label,
		className,
		Icon,
		color,
		...rest
	}

	return <InputAtomView {...methods} Icon={Icon} />;
}

export { InputAtom }