import { useLoginFormOrganism } from "./hook";
import { LoginFormOrganismView } from "./view";

const LoginFormOrganism = () => {
	const methods = useLoginFormOrganism()

;	return <LoginFormOrganismView {...methods}/>
}

export { LoginFormOrganism };