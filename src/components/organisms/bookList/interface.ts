import { BookModel } from "@/models/book.model";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Import the missing type
import { RootStackNavigationParamList } from "@/components/organisms/stackNavigation/interface";

export interface BookListOrganismProps {
  books: BookModel[];
}

export interface BookListOrganismViewProps {
  books: BookModel[];
  onBookPress: (bookId: string) => void;
}
