import { useRegisterFormOrganism } from "./hook";
import { RegisterFormOrganismProps } from "./interface";
import { RegisterFormOrganismView } from "./view";

const RegisterFormOrganism: React.FC<RegisterFormOrganismProps> = ({
	isEditable = true,
	editingExisting = false
}) => {
	const methods = useRegisterFormOrganism(editingExisting)

;	return <RegisterFormOrganismView {...methods} isEditable={isEditable} editingExisting={editingExisting}/>
}

export { RegisterFormOrganism };