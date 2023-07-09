import { createRef } from "react";

import { HeadTab, Header, SideTab } from "@/components/common";

import styles from "./layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  const targetRef = createRef<HTMLDivElement>();

  return (
    <>
      <Header>
        <HeadTab />
      </Header>
      <div className={styles.bodyContainer}>
        <div className={styles.sideContainer}>
          <SideTab />
        </div>
        <div ref={targetRef} className={styles.mainContainer}>
          <div className={styles.mainContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
