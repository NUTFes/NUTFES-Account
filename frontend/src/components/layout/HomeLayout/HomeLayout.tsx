import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    {/* TODO: childrenにHeadTabを持つHeaderを配置 */}
    {/* TODO: SideTabを配置 */}
    <div>{children}</div>
    {/* TODO: Footerを配置 */}
  </>
);

export default HomeLayout;
