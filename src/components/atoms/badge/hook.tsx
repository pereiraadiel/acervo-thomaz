import { Octicons, Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useState, useEffect } from "react";
import React from "react";

const variants = {
	search: <Octicons name="search" size={20} color={colors.gray[600]} />,
	readed: <Octicons name="bookmark" size={20} color={colors.green[600]} />,
	"not-readed": <Octicons name="bookmark" size={20} color={colors.red[600]} />,
	reading: <Octicons name="bookmark" size={20} color={colors.orange[600]} />,
	abandoned: <Octicons name="bookmark" size={20} color={colors.red[600]} />,
	desired: <Octicons name="bookmark" size={20} color={colors.blue[600]} />,
	"scan-barcode": <Ionicons name="barcode-sharp" size={20} color={colors.gray[600]} />,
	save: <Octicons name="bookmark" size={20} color={colors.gray[600]} />,
	'reading-register': <FontAwesome6 name="book-open-reader" size={24} color="white"/>
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
	'reading-register': 'Registrar Leitura'
};

const useBadgeAtom = (isActive: boolean) => {
	const [variant, setVariant] = useState<keyof typeof variants>("readed");
	const [text, setText] = useState(variantTexts[variant]);
	const [color, setColor] = useState({
		text: 'text-gray-700',
		background: 'bg-gray-700',
	});
	const [Icon, setIcon] = useState<React.ReactElement>(variants[variant]);

	useEffect(() => {
		const activeColor = isActive ? '' : '/40';
		const baseColors = {
			search: { text: 'text-white', background: `bg-gray-600${activeColor}`, icon: colors.white },
			readed: { text: isActive ? 'text-black' : 'text-white', background: `bg-green-600${activeColor}`, icon: isActive ? colors.black: colors.white },
			"not-readed": { text: 'text-white', background: `bg-red-600${activeColor}`, icon: colors.white },
			"scan-barcode": { text: 'text-white', background: `bg-gray-600${activeColor}`, icon: colors.white },
			reading: { text: 'text-white', background: `bg-orange-600${activeColor}`, icon: colors.white },
			abandoned: { text: 'text-white', background: `bg-red-600${activeColor}`, icon: colors.white },
			desired: { text: 'text-white', background: `bg-blue-600${activeColor}`, icon: colors.white },
			save: { text: 'text-white', background: `bg-gray-600${activeColor}`, icon: colors.white },
			"reading-register": { text: 'text-white', background: `bg-gray-600${activeColor}`, icon: colors.white },
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
		isActive,
	};
};

export { useBadgeAtom };
