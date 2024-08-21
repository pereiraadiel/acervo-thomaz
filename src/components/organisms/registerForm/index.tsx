import { useRegisterFormOrganism } from "./hook";
import { RegisterFormOrganismView } from "./view";

const RegisterFormOrganism = () => {
	const methods = useRegisterFormOrganism()

;	return <RegisterFormOrganismView {...methods}/>
}

export { RegisterFormOrganism };