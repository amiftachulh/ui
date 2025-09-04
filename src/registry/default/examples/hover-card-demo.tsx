import { LuCalendarDays } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { button } from "styled-system/recipes";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://nextjs.org"
          className={button({ variant: "link" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent css={{ w: "80" }}>
        <styled.div css={{ display: "flex", justifyContent: "space-between", gap: "4" }}>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <styled.div css={{ spaceY: "1" }}>
            <styled.h4 css={{ textStyle: "sm", fontWeight: "semibold" }}>@nextjs</styled.h4>
            <styled.p css={{ textStyle: "sm" }}>
              The React Framework - created and maintained by @vercel.
            </styled.p>
            <styled.div css={{ display: "flex", alignItems: "center", pt: "2" }}>
              <LuCalendarDays className={css({ mr: "2", w: "4", h: "4", opacity: "0.7" })} />
              <styled.span css={{ textStyle: "xs", color: "muted.fg" }}>
                Joined December 2021
              </styled.span>
            </styled.div>
          </styled.div>
        </styled.div>
      </HoverCardContent>
    </HoverCard>
  );
}
