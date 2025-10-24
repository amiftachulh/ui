"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { ScrollArea, Scrollbar } from "@/registry/default/ui/scroll-area";

const examples = [
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
    hidden: false,
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/tasks",
    hidden: false,
  },
  {
    name: "Playground",
    href: "/examples/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
    hidden: false,
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },
];

export function ExamplesNav({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  const pathname = usePathname();

  return (
    <styled.div css={{ display: "flex", alignItems: "center", ...css }} {...props}>
      <ScrollArea css={{ maxW: "96%", md: { maxW: "600px" }, lg: { maxW: "none" } }}>
        <styled.div css={{ display: "flex", alignItems: "center" }}>
          <ExampleLink
            example={{ name: "Examples", href: "/", code: "", hidden: false }}
            isActive={pathname === "/"}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </styled.div>
        <Scrollbar orientation="horizontal" css={{ visibility: "hidden" }} />
      </ScrollArea>
    </styled.div>
  );
}

function ExampleLink({
  example,
  isActive,
}: {
  example: (typeof examples)[number];
  isActive: boolean;
}) {
  if (example.hidden) {
    return null;
  }

  return (
    <Link
      key={example.href}
      href={example.href}
      data-active={isActive}
      className={css({
        display: "flex",
        h: "7",
        alignItems: "center",
        justifyContent: "center",
        px: "4",
        color: "muted.fg",
        textAlign: "center",
        textStyle: "md",
        fontWeight: "medium",
        transition: "colors",
        _hover: {
          color: "primary",
        },
        "&[data-active=true]": {
          color: "primary",
        },
      })}
    >
      {example.name}
    </Link>
  );
}
