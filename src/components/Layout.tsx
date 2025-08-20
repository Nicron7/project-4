import type { ReactNode } from "react";
import FavoriteList from "./Favorite/FavoriteList";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-indigo-950 w-full min-h-screen">        
        <FavoriteList />
      {children}
    </main>
  );
}
