import { BadgeVariant } from "@/components/atoms/badge/interface";

export interface TabInterface {
  name: BadgeVariant;
  component: React.ReactNode;
}

export interface TabsMoleculeProps {
  initialTab: string;
  tabs: TabInterface[];
}

export interface TabsMoleculeViewProps {
  children: React.ReactNode;
  onChangeTab: (newTab: string) => void;
  tab: string;
  tabs: TabInterface[];
}
