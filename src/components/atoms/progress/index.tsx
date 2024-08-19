import { ProgressAtomProps } from "./interface";
import { ProgressAtomView } from "./view";

const ProgressAtom: React.FC<ProgressAtomProps> = (methods) =>  {
	return <ProgressAtomView {...methods} />
}

export { ProgressAtom };