import { TbBookmark, TbHeart, TbInbox, TbStar } from "react-icons/tb";
import { styled } from "styled-system/jsx";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";

export default function EmptyIcon() {
  return (
    <styled.div
      css={{ display: "grid", gap: "8", md: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } }}
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <TbInbox />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>Your inbox is empty. New messages will appear here.</EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <TbStar />
          </EmptyMedia>
          <EmptyTitle>No favorites</EmptyTitle>
          <EmptyDescription>Items you mark as favorites will appear here.</EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <TbHeart />
          </EmptyMedia>
          <EmptyTitle>No likes yet</EmptyTitle>
          <EmptyDescription>Content you like will be saved here for easy access.</EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <TbBookmark />
          </EmptyMedia>
          <EmptyTitle>No bookmarks</EmptyTitle>
          <EmptyDescription>Save interesting content by bookmarking it.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </styled.div>
  );
}
