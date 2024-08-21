import { useRecoverFormOrganism } from "./hook";
import { RecoverFormOrganismView } from "./view";

const RecoverFormOrganism = () => {
	const methods = useRecoverFormOrganism()

;	return <RecoverFormOrganismView {...methods}/>
}

export { RecoverFormOrganism };