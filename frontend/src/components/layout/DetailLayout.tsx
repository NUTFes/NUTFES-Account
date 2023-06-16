import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const DetailLayout = ({ children }: LayoutProps) => (
  // TODO: 認証状態を確認し、未認証の場合はログイン画面にリダイレクト
  <>
    {/* TODO: childrenを持たないHeaderを配置 */}
    {/* SideTabは配置しない */}
    <div>{children}</div>
    {/* TODO: Footerを配置 */}
  </>
);

export default DetailLayout;
