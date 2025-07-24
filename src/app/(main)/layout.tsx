import { styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Header from "./header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <styled.div className={container()} css={{ mt: "14" }}>
        {children}
      </styled.div>
      <Toaster />
      <Sonner />
    </>
  );
}
