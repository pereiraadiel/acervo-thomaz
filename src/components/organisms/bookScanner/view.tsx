import { View } from "react-native";
import { BookScannerViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { CameraMolecule } from "@/components/molecules/camera.molecule";
import { LoadingAtom } from "@/components/atoms/loading";
import { RequestCameraMolecule } from "../../molecules/requestCamera";

const BookScannerView: React.FC<BookScannerViewProps> = ({ camera, scan, barcode }) => {
	if(!camera.hasCameraPermission) {
		return (
			<RequestCameraMolecule canAskAgain={camera.canAskAgain} requestCamera={camera.requestCamera}/>
		)
	}

	if(scan.fetching) {
		return (
			<View>
				<LoadingAtom variant="large" />
			</View>
		)
	}
	
	return (
		<View className="flex flex-col items-center justify-center mx-4">
			<TitleAtom className="my-2 text-center">Escaneie o código ISBN do livro</TitleAtom>
			<SubtitleAtom className="font-semibold my-2">Aponte a câmera para escanear o código</SubtitleAtom>
			<CameraMolecule
				dismissCamera={camera.dismissCamera}
				onScan={barcode.onScan}
				scanned={barcode.scanned}
			/>
		</View>
	)
}

export { BookScannerView };