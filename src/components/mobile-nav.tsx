"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { docsConfig } from "@/config/docs";
import { Button } from "./ui/button";
import { Vaul, VaulContent, VaulDescription, VaulTitle, VaulTrigger } from "./ui/vaul";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Vaul open={open} onOpenChange={setOpen}>
      <VaulTrigger asChild>
        <Button variant="ghost" size="icon" md={{ display: "none" }}>
          <LuMenu />
        </Button>
      </VaulTrigger>
      <VaulContent maxH="60svh">
        <VaulTitle srOnly>Navigation</VaulTitle>
        <VaulDescription srOnly>Explore the documentation</VaulDescription>
        <div className={css({ overflowY: "auto", p: "4" })}>
          {docsConfig.sidebarNav.map((nav) => (
            <div key={nav.title}>
              <h4 className={css({ py: "1", textStyle: "sm", fontWeight: "semibold" })}>
                {nav.title}
              </h4>
              <ul className={css({ spaceY: "0.5" })}>
                {nav.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as string}
                      className={css({
                        display: "block",
                        bg: pathname === item.href ? "primary/10!" : "transparent",
                        color: "fg",
                        px: "2",
                        py: "1",
                        textStyle: "sm",
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
              </ul>
            </div>
          ))}
        </div>
      </VaulContent>
    </Vaul>
  );
}
