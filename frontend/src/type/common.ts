import { ReactNode } from "react";

export interface TabItem {
  key?: string;
  name?: string;
  displayName: string;
  icon: ReactNode;
  href: string;
}
