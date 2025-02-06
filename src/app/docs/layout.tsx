import { flex } from "styled-system/patterns";
import Navigation from "./navigation";

export default async function DocLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={flex({ gap: "4" })}>
      <Navigation />
      {children}
    </div>
  );
}
