import React from "react";

import { HeadTab, Header, SideTab, Footer } from "@/components/common";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    <Header>
      <HeadTab />
    </Header>
    <main className="flex h-full">
      <SideTab />
      <section className="h-screen grow bg-green-200">{children}</section>
    </main>
    <footer className="bg-gray-400">
      <Footer />
    </footer>
  </>
);

export default HomeLayout;
