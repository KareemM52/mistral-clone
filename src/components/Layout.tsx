import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Ensure Footer is included

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer /> {}
    </div>
  );
}
