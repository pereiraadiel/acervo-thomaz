import { NoteMoleculeProps } from "./interface";
import { NoteMoleculeView } from "./view";

const NoteMolecule: React.FC<NoteMoleculeProps> = ({...methods}) => {
	return <NoteMoleculeView {...methods}/>
}

export { NoteMolecule };