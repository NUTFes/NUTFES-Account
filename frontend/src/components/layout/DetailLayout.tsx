import React from "react";

import { Header, Footer } from "@/components/common";

interface LayoutProps {
  children?: React.ReactNode;
}

const DetailLayout = ({ children }: LayoutProps) => (
  <>
    <header className="h-16 bg-gray-200">
      <Header>
        hoge
        {/* TODO: DetailLayoutのtitleとBack Buttonはここ */}
      </Header>
    </header>
    <main className="flex h-full">{children}</main>
    <footer className="bg-gray-400">
      <Footer />
    </footer>
  </>
);

export default DetailLayout;
