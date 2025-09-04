"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { table } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(table);

function Root(props: React.ComponentProps<"table">) {
  return (
    <div className={css({ pos: "relative", w: "full", overflowX: "auto" })}>
      <table {...props} />
    </div>
  );
}
const Table = withProvider(Root, "root");
const TableHeader = withContext("thead", "header");
const TableBody = withContext("tbody", "body");
const TableFooter = withContext("tfoot", "footer");
const TableRow = withContext("tr", "row");
const TableHead = withContext("th", "head");
const TableCell = withContext("td", "cell");
const TableCaption = withContext("caption", "caption");

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption };
