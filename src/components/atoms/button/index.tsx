import { ButtonAtomProps } from "./interface";
import { ButtonAtomView } from "./view";

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
	return <ButtonAtomView {...props}/>
};

export { ButtonAtom };