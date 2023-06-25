import { ReactNode } from "react";

export interface TabItem {
  key: string;
  name: string;
  icon?: ReactNode;
  href?: string;
}
