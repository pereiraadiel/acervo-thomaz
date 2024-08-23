import { useReadingPages } from "./hook";
import { ReadingPagesMoleculeProps } from "./interface";
import { ReadingPagesMoleculeView } from "./view";

const ReadingPagesMolecule: React.FC<ReadingPagesMoleculeProps> = (props) => {

	const { error, inputValue, onButtonPress, onChangeValue } = useReadingPages(props);
	
	const methods = {
		...props,
		error,
		inputValue,
		onButtonPress,
		onChangeValue
	}

	return <ReadingPagesMoleculeView {...methods}/>
}

export { ReadingPagesMolecule };