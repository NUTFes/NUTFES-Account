import { HeadTab, Header, SideTab } from "@/components/common";

import styles from "./layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    <Header>
      <HeadTab />
    </Header>
    <div className={styles.bodyContainer}>
      <div className={styles.sideContainer}>
        <SideTab />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  </>
);

export default HomeLayout;
