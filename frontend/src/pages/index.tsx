import { NextPage } from "next";

export const Home: NextPage = () => (
  <main>
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-48 w-1/5 items-center justify-center bg-red-100">
        <p className="text-2xl font-bold text-red-300">tailwind-test-text</p>
      </div>
    </div>
  </main>
);
