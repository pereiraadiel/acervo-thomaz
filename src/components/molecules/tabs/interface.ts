import { BadgeVariant } from "@/components/atoms/badge/interface";
import { useTabsScroll } from "./hook";

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
  scroll: ReturnType<typeof useTabsScroll>;
  tab: string;
  tabs: TabInterface[];
}
