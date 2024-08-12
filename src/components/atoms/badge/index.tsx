import { useEffect } from "react";
import { useBadgeAtom } from "./hook";
import { BadgeAtomProps } from "./interface";
import { BadgeAtomView } from "./view";

const BadgeAtom: React.FC<BadgeAtomProps> = ({ onPress, variant = 'save' }) => {
	const {
		Icon,
		text,
		color,
		isActive,
		setIsActive,
		setVariant,
	} = useBadgeAtom();

	useEffect(() => {
		setVariant(variant);
		setIsActive(isActive)
	}, [variant]);

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