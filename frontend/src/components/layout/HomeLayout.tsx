import React from "react";

import { HeadTab, Header, SideTab, Footer } from "@/components/common";

interface LayoutProps {
  children?: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => (
  <>
    <header className="h-16 bg-gray-200">
      <Header>
        <HeadTab />
      </Header>
    </header>
    <main className="flex h-full">
      <aside className="w-72 bg-blue-200">
        <SideTab />
      </aside>
      <section className="grow bg-green-200">{children}</section>
    </main>
    <footer className="bg-gray-400">
      <Footer />
    </footer>
  </>
);

export default HomeLayout;
