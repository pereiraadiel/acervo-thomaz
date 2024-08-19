import { useEffect } from "react";
import { useLabeledInputAtom } from "./hook";
import { LabeledInputAtomProps } from "./interface";
import { LabeledInputAtomView } from "./view";

const LabeledInputAtom: React.FC<LabeledInputAtomProps> = ({
	className,
	label,
	variant = 'name',
	error,
	...rest
}) => {
	
	const { Icon, setVariant, color, setError } = useLabeledInputAtom()

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
		error,
		...rest
	}

	return <LabeledInputAtomView {...methods} />;
}

export { LabeledInputAtom }