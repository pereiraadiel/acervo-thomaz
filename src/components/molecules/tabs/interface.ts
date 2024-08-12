import { BadgeVariant } from "@/components/atoms/badge/interface";

export interface TabsMoleculeProps {
  initialTab: string;
  tabs: {
    name: BadgeVariant;
    component: React.ReactNode;
  }[];
}

export interface TabsMoleculeViewProps {
  children: React.ReactNode;
  onChangeTab: (newTab: string) => void;
  tab: string;
  tabs: {
    name: BadgeVariant;
  }[];
}
