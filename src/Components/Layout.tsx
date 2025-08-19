import { ReactNode } from "react";
import FavoriteList from "./FavoriteList";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-indigo-950 w-full min-h-screen p-4">
        <FavoriteList />
      {children}
    </main>
  );
}
