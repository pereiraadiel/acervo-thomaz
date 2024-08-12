export interface SearchMoleculeProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  onPressIn: () => void;
}

export interface SearchMoleculeViewProps {
  searchTerm: string;
  placeholder?: string;
  setSearchTerm: (term: string) => void;
  onPressIn: () => void;
}
