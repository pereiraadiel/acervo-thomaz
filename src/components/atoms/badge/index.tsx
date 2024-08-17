import { useEffect } from "react";
import { useBadgeAtom } from "./hook";
import { BadgeAtomProps } from "./interface";
import { BadgeAtomView } from "./view";

const BadgeAtom: React.FC<BadgeAtomProps> = ({ onPress, variant = 'save', isActive, className }) => {
	const {
		Icon,
		text,
		color,
		setVariant,
	} = useBadgeAtom(isActive);

	useEffect(() => {
		setVariant(variant);
	}, [variant, isActive]);

	const handlePress = () => {
		onPress && onPress();
	}

	const methods = {
		text,
		Icon,
		color,
		className
	}

	return <BadgeAtomView onPress={handlePress} {...methods}  />;
}

export { BadgeAtom };