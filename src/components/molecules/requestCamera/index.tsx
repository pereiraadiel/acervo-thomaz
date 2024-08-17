import { RequestCameraMoleculeProps } from "./interface"
import { RequestCameraMoleculeView } from "./view"

const RequestCameraMolecule: React.FC<RequestCameraMoleculeProps> = (props) => {

	return <RequestCameraMoleculeView {...props}/>
}

export { RequestCameraMolecule }