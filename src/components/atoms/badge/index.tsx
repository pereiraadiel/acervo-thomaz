import { useEffect } from "react";
import { useBadgeAtom } from "./hook";
import { BadgeAtomProps } from "./interface";
import { BadgeAtomView } from "./view";

const BadgeAtom: React.FC<BadgeAtomProps> = ({ onPress, variant = 'save', isActive, className, size = 'medium' }) => {
	const {
		Icon,
		text,
		color,
		setVariant,
		setSize,
	} = useBadgeAtom(isActive);

	useEffect(() => {
		setVariant(variant);
	}, [variant, isActive]);

	useEffect(() => {
		setSize(size);
	}, [size]);

	const handlePress = () => {
		onPress && onPress();
	}

	const methods = {
		text,
		Icon,
		color,
		size,
		className
	}

	return <BadgeAtomView onPress={handlePress} {...methods}  />;
}

export { BadgeAtom };