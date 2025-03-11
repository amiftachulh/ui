import { styled } from "styled-system/jsx";
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
      <styled.div css={{ maxW: "breakpoint-2xl", mx: "auto", mt: "14" }}>{children}</styled.div>
      <Toaster />
      <Sonner />
    </>
  );
}
