import { Image, Text } from "react-native";
import { Card } from "../molecules/card.molecule";
import { cn } from "../../lib/utils";

interface BookCardProps {
	title: string;
	description: string;
	imageUrl: string;
	author: string;
}

const BookCard: React.FC<BookCardProps> = ({
	title,
	description,
	imageUrl,
	author
}) => {
  return (
		<Card className={cn('w-56')}>
			<Card.Content>
				<Image source={{uri: imageUrl }} className={cn('object-contain w-auto h-64')}/>
			</Card.Content>
			<Card.Header>
				<Card.Title className="text-ellipsis line-clamp-1">{title}</Card.Title>
				<Card.Description className="text-ellipsis line-clamp-2" >{description}</Card.Description>
			</Card.Header>
			<Card.Footer>
				<Text className="text-sm text-gray-400">{author}</Text>
			</Card.Footer>
		</Card>
  )
}

export { BookCard };