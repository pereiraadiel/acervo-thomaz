import { useEffect } from "react";
import { useBadgeAtom } from "./hook";
import { BadgeAtomProps } from "./interface";
import { BadgeAtomView } from "./view";

const BadgeAtom: React.FC<BadgeAtomProps> = ({ onPress, variant = 'save', isActive }) => {
	const {
		Icon,
		text,
		color,
		setIsActive,
		setVariant,
	} = useBadgeAtom();

	useEffect(() => {
		setVariant(variant);
		setIsActive(isActive)
	}, [variant, isActive]);

	const handlePress = () => {
		setIsActive(!isActive);
		onPress && onPress();
	}

	const methods = {
		text,
		Icon,
		color,
	}

	return <BadgeAtomView onPress={handlePress} {...methods}  />;
}

export { BadgeAtom };