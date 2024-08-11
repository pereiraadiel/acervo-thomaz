import { useEffect } from "react";
import { useBadgeAtom } from "./hook";
import { BadgeAtomProps } from "./interface";
import { BadgeAtomView } from "./view";

const BadgeAtom: React.FC<BadgeAtomProps> = ({ onPress, variant = 'save' }) => {
	const {
		Icon,
		text,
		color,
		setVariant,
	} = useBadgeAtom();

	useEffect(() => {
		setVariant(variant);
	}, [variant]);

	const methods = {
		text,
		Icon,
		color,
	}

	return <BadgeAtomView onPress={onPress} {...methods}  />;
}

export { BadgeAtom };