import { useLoadingAtom } from "./hook";
import { LoadingAtomProps } from "./interface";
import { LoadingAtomView } from "./view";

const LoadingAtom: React.FC<LoadingAtomProps> = ({
	variant = 'default',
	position = 'center'
}) => {
	const {iconSize, positionStyle } = useLoadingAtom(variant, position);

	const methods = {
		iconSize,
		positionStyle
	}

	return <LoadingAtomView {...methods}/>
}

export { LoadingAtom }