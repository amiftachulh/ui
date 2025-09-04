"use client";

import * as React from "react";
import { LuCircle, LuCircleCheck, LuCircleHelp } from "react-icons/lu";
import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/ui/navigation-menu";

const components = [
  {
    title: "Accordion",
    href: "/docs/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal an associated section of content.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styled.ul
              css={{
                display: "grid",
                gap: "3",
                p: "6",
                md: { w: "400px" },
                lg: { w: "500px", gridTemplateColumns: ".75fr 1fr" },
              }}
            >
              <styled.li css={{ gridRow: "span 3" }}>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={css({
                      display: "flex",
                      w: "full",
                      h: "full",
                      userSelect: "none",
                      flexDir: "column",
                      justifyContent: "flex-end",
                      rounded: "md",
                      bgGradient: "to-b",
                      gradientFrom: "muted/50",
                      gradientTo: "muted",
                      p: "6",
                      textDecoration: "none",
                      outline: "none",
                      _focus: { shadow: "md" },
                    })}
                  >
                    <styled.div css={{ mb: "2", mt: "4", textStyle: "lg", fontWeight: "medium" }}>
                      shadcn/ui
                    </styled.div>
                    <styled.p css={{ textStyle: "sm", lineHeight: "tight", color: "muted.fg" }}>
                      Beautifully designed components that you can copy and paste into your apps.
                      Accessible. Customizable. Open Source.
                    </styled.p>
                  </Link>
                </NavigationMenuLink>
              </styled.li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </styled.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styled.ul
              css={{
                display: "grid",
                w: "400px",
                gap: "3",
                p: "4",
                md: { gridTemplateColumns: "repeat(2, 1fr)", w: "500px" },
                lg: { w: "600px" },
              }}
            >
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </styled.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/docs">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styled.ul css={{ display: "grid", gap: "4", w: "300px" }}>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <styled.div css={{ fontWeight: "medium" }}>Components</styled.div>
                    <styled.div css={{ color: "muted.fg" }}>
                      Browse all components in the library.
                    </styled.div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <styled.div css={{ fontWeight: "medium" }}>Documentation</styled.div>
                    <styled.div css={{ color: "muted.fg" }}>
                      Learn how to use the library.
                    </styled.div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <styled.div css={{ fontWeight: "medium" }}>Blog</styled.div>
                    <styled.div css={{ color: "muted.fg" }}>Read our latest blog posts.</styled.div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </styled.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styled.ul css={{ display: "grid", gap: "4", w: "200px" }}>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </styled.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <styled.ul css={{ display: "grid", gap: "4", w: "200px" }}>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "2",
                    })}
                  >
                    <LuCircleHelp />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "2",
                    })}
                  >
                    <LuCircle />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "2",
                    })}
                  >
                    <LuCircleCheck />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </styled.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <styled.li>
      <NavigationMenuLink asChild>
        <Link
          className={css({
            display: "block",
            userSelect: "none",
            spaceY: "1",
            rounded: "md",
            p: "3",
            lineHeight: "none",
            textDecoration: "none",
            outline: "none",
            transition: "colors",
            _hover: { bg: "accent", color: "accent.fg" },
            _focus: { bg: "accent", color: "accent.fg" },
          })}
          {...props}
        >
          <styled.div css={{ textStyle: "sm", fontWeight: "medium", lineHeight: "none" }}>
            {title}
          </styled.div>
          <styled.p
            css={{ lineClamp: "2", textStyle: "sm", lineHeight: "snug", color: "muted.fg" }}
          >
            {children}
          </styled.p>
        </Link>
      </NavigationMenuLink>
    </styled.li>
  );
};
