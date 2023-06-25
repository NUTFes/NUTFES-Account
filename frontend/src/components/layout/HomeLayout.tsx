import React from "react";

import { Header } from "../common";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {/* TODO: childrenにHeadTabを持つHeaderを配置 */}
    {/* TODO: SideTabを配置 */}
    <div>{children}</div>
    {/* TODO: Footerを配置 */}
  </>
);

export default HomeLayout;
