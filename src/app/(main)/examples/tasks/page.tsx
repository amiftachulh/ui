import { Metadata } from "next";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";

const title = "Tasks";
const description = "A task and issue tracker build using Tanstack Table.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(main)/examples/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <styled.div css={{ md: { display: "none" } }}>
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Tasks"
          className={css({ display: "block", _dark: { display: "none" } })}
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Tasks"
          className={css({ display: "none", _dark: { display: "block" } })}
        />
      </styled.div>
      <styled.div
        css={{
          display: "none",
          h: "full",
          flex: "1",
          flexDir: "column",
          gap: "8",
          p: "8",
          md: { display: "flex" },
        }}
      >
        <styled.div
          css={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2" }}
        >
          <styled.div css={{ display: "flex", flexDir: "column", gap: "1" }}>
            <styled.h2 css={{ textStyle: "2xl", fontWeight: "semibold", letterSpacing: "tight" }}>
              Welcome back!
            </styled.h2>
            <styled.p css={{ color: "muted.fg" }}>
              Here&apos;s a list of your tasks for this month.
            </styled.p>
          </styled.div>
          <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
            <UserNav />
          </styled.div>
        </styled.div>
        <DataTable data={tasks} columns={columns} />
      </styled.div>
    </>
  );
}
