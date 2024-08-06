import { MainTemplate } from "@/components/templates/main.template"
import { Title } from "@/components/atoms/title.atom"
import useCameraPermissions from "@/hooks/useCameraPermission.hook"
import { BookScanView } from "./view";

const BookScanPage = () =>{
	const methods = useCameraPermissions();

	return <BookScanView {...methods}/>;
}

export { BookScanPage }