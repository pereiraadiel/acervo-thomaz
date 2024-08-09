import { useEffect } from "react";
import { useLogoAtom } from "./hook"
import { LogoAtomProps } from "./interface"
import { LogoAtomView } from "./view"

const LogoAtom: React.FC<LogoAtomProps> = ({className, variant = 'default'}) => {
	const {	color, setVariant	} = useLogoAtom();

	useEffect(() => {
		setVariant(variant);
	}, [variant])
	
	const methods = {
		className,
		variant,
		color,
	}

	return <LogoAtomView {...methods}/>;
}

export { LogoAtom }