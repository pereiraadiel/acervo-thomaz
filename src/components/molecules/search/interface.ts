export interface SearchMoleculeProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export interface SearchMoleculeViewProps {
  searchTerm: string;
  placeholder?: string;
  setSearchTerm: (term: string) => void;
  onEndEditing: () => void;
}
