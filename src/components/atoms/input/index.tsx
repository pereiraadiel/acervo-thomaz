import { InputAtomProps } from "./interface";
import { InputAtomView } from "./view";

const InputAtom: React.FC<InputAtomProps> = ({...methods}) => {
	return <InputAtomView 
		{...methods} 
	/>
}

export { InputAtom };