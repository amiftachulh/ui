import { LuCalendarDays } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { button } from "styled-system/recipes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://nextjs.org"
          className={button({ variant: "ghost" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent w="80">
        <styled.div display="flex" justifyContent="space-between" gap="4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <styled.div spaceY="1">
            <styled.h4 textStyle="sm" fontWeight="semibold">
              @nextjs
            </styled.h4>
            <styled.p textStyle="sm">
              The React Framework – created and maintained by @vercel.
            </styled.p>
            <styled.div display="flex" alignItems="center" pt="2">
              <LuCalendarDays className={css({ mr: "2", w: "4", h: "4", opacity: "0.7" })} />
              <styled.span textStyle="xs" color="muted.fg">
                Joined December 2021
              </styled.span>
            </styled.div>
          </styled.div>
        </styled.div>
      </HoverCardContent>
    </HoverCard>
  );
}
