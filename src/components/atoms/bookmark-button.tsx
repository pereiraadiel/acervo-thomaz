import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { Ionicons  } from '@expo/vector-icons'
import { cn } from "@/lib/utils";
import { colors } from "@/styles/colors";
import { BookStatus } from "@/models/book.model";

interface BookmarkButtonProps extends TouchableOpacityProps {
	variant?: BookStatus;
	fill?: boolean;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({className, variant = 'not-readed', onPress, fill = false} ) => {
	const variants = {
		reading: colors.blue[400],
		readed: colors.green[400],
		'not-readed': colors.orange[400],
		abandoned: colors.red[400]
	}
	const labelFields = {
		reading: <Text className="text-blue-400 text-sm font-bold">Lendo</Text>,
		readed: <Text className="text-green-400 text-sm font-bold">Lido</Text>,
		'not-readed': <Text className="text-orange-400 text-sm font-bold">Não lido</Text>,
		abandoned: <Text className="text-red-400 text-sm font-bold">Abandonado</Text>
	}

	const color = variants[variant] || colors.gray[700];	
	const iconName = fill ? 'bookmark' : 'bookmark-outline';
	const labelField = labelFields[variant] || labelFields['not-readed'];

	return (
		<TouchableOpacity 
			className={cn`rounded-full bg-gray-500 h-12 flex items-center justify-center ${className} ${fill ? 'px-4 flex-row gap-2': 'w-12'}`}
			onPress={onPress}
			>
			<Ionicons name={iconName} size={24} color={color}/>
			{fill && labelField}
		</TouchableOpacity>
	);
}

export { BookmarkButton };