"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { docsConfig } from "@/config/docs";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" css={{ md: { display: "none" } }}>
          <LuMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent css={{ maxH: "80svh" }}>
        <DrawerTitle css={{ srOnly: true }}>Navigation</DrawerTitle>
        <DrawerDescription css={{ srOnly: true }}>Explore the documentation</DrawerDescription>
        <styled.div className={css({ overflowY: "auto", p: "6" })}>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
            {docsConfig.mainNav?.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            ))}
          </styled.div>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "4", mt: "6" }}>
            {docsConfig.sidebarNav.map((item) => (
              <styled.div key={item.title} css={{ display: "flex", flexDir: "column", gap: "2" }}>
                <styled.h4 css={{ textStyle: "lg", fontWeight: "medium" }}>{item.title}</styled.h4>
                <styled.ul css={{ spaceY: "0.5" }}>
                  {item.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href as string}
                        className={css({
                          display: "block",
                          bg: pathname === item.href ? "primary/10!" : "transparent",
                          color: "fg",
                          py: "1",
                          rounded: "md",
                          _hover: {
                            bg: "zinc.500/20",
                          },
                        })}
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </styled.ul>
              </styled.div>
            ))}
          </styled.div>
        </styled.div>
      </DrawerContent>
    </Drawer>
  );
}
