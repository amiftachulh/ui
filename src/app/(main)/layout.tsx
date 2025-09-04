import { styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import { Toaster as Sonner } from "@/registry/default/ui/sonner";
import { Toaster } from "@/registry/default/ui/toaster";
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
