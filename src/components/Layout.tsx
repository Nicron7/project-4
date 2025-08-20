import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <main className="bg-indigo-950 w-full min-h-screen">{children}</main>;
}
