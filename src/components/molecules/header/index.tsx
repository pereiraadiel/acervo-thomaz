import { useEffect } from "react";
import { useHeaderMolecule } from "./hook";
import { HeaderMoleculeProps } from "./interface";
import { HeaderMoleculeView } from "./view";

const HeaderMolecule: React.FC<HeaderMoleculeProps> = ({
	title: initialTitle,
	subtitle: initialSubtitle,
	variant: initialVariant = 'default',
	color: initialColor
}) => {

	const {
		title,
		subtitle,
		variant,
		color,
		setTitle,
		setSubtitle,
		setVariant,
		setColor
	} = useHeaderMolecule();

	useEffect(() => {
		setTitle(initialTitle);
		setSubtitle(initialSubtitle);
		setVariant(initialVariant);
		setColor(initialColor);
	}, [
		initialTitle,
		initialSubtitle,
		initialVariant,
		initialColor,
	]);

	const methods = {
		title,
		subtitle,
		variant,
		color
	} as const

	return <HeaderMoleculeView {...methods}/>
}

export { HeaderMolecule };