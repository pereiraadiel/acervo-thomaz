import { Octicons, Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useState, useEffect } from "react";
import React from "react";

const variants = {
	search: <Octicons name="search" size={20} color={colors.gray[500]} />,
	readed: <Octicons name="bookmark" size={20} color={colors.green[500]} />,
	"not-readed": <Octicons name="bookmark" size={20} color={colors.red[500]} />,
	reading: <Octicons name="bookmark" size={20} color={colors.orange[500]} />,
	abandoned: <Octicons name="bookmark" size={20} color={colors.red[500]} />,
	desired: <Octicons name="bookmark" size={20} color={colors.blue[500]} />,
	"scan-barcode": <Ionicons name="barcode-sharp" size={20} color={colors.gray[500]} />,
	save: <Octicons name="bookmark" size={20} color={colors.gray[500]} />,
};

const variantTexts = {
	search: 'Buscar',
	readed: 'Lido',
	"not-readed": 'Não lido',
	reading: 'Lendo',
	abandoned: 'Abandonado',
	desired: 'Desejado',
	"scan-barcode": 'Escanear ISBN',
	save: 'Salvar',
};

const useBadgeAtom = () => {
	const [variant, setVariant] = useState<keyof typeof variants>("readed");
	const [isActive, setIsActive] = useState(false);
	const [text, setText] = useState(variantTexts[variant]);
	const [color, setColor] = useState({
		text: 'text-gray-500',
		background: 'bg-gray-500',
	});
	const [Icon, setIcon] = useState<React.ReactElement>(variants[variant]);

	useEffect(() => {
		const activeColor = isActive ? '' : '/40';
		const baseColors = {
			search: { text: 'text-white', background: `bg-gray-500${activeColor}`, icon: colors.white },
			readed: { text: 'text-black', background: `bg-green-500${activeColor}`, icon: colors.black },
			"not-readed": { text: 'text-white', background: `bg-red-500${activeColor}`, icon: colors.white },
			"scan-barcode": { text: 'text-white', background: `bg-gray-500${activeColor}`, icon: colors.white },
			reading: { text: 'text-white', background: `bg-orange-500${activeColor}`, icon: colors.white },
			abandoned: { text: 'text-white', background: `bg-red-500${activeColor}`, icon: colors.white },
			desired: { text: 'text-white', background: `bg-blue-500${activeColor}`, icon: colors.white },
			save: { text: 'text-white', background: `bg-gray-500${activeColor}`, icon: colors.white },
		};

		const selectedVariant = baseColors[variant] || baseColors.search;

		setColor({
			text: selectedVariant.text,
			background: selectedVariant.background,
		});
		setIcon(React.cloneElement(variants[variant], { color: selectedVariant.icon }));
		setText(variantTexts[variant]);

	}, [variant, isActive]);

	return {
		variant,
		setVariant,
		text,
		color,
		Icon,
		setIsActive,
		isActive,
	};
};

export { useBadgeAtom };
