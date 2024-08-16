import { useState } from "react";

const useHeaderMolecule = () => {
	const [title, setTitle] = useState<string | undefined>();
	const [subtitle, setSubtitle] = useState<string | undefined>();
	const [variant, setVariant] = useState<"default" | "with-back">("default");
	const [color, setColor] = useState<"accent" | "secondary">("accent");

	return {
		title,
		setTitle,
		subtitle,
		setSubtitle,
		variant,
		setVariant,
		color,
		setColor
	};
}

export { useHeaderMolecule };