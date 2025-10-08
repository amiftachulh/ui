import Image from "next/image";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item";

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

const generateSvgUrl = (text: string) => {
  const hash = text.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  const svg = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="hsl(${hue}, 70%, 50%)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export default function ItemImage() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "md", flexDir: "column", gap: "6" }}>
      <ItemGroup css={{ gap: "4" }}>
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image">
                <Image
                  src={generateSvgUrl(song.title)}
                  alt={song.title}
                  width={32}
                  height={32}
                  className={css({ objectFit: "cover", filter: "grayscale(1)" })}
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle css={{ lineClamp: "1" }}>
                  {song.title} - <styled.span css={{ color: "muted.fg" }}>{song.album}</styled.span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent css={{ flex: "none", textAlign: "center" }}>
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </styled.div>
  );
}
