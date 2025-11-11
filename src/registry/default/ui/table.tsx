"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { table } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(table);

function Root(props: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className={css({ pos: "relative", w: "full", overflowX: "auto" })}
    >
      <table data-slot="table" {...props} />
    </div>
  );
}

const Table = withProvider(Root, "root", {
  defaultProps: {
    role: "table",
  },
});

const TableHeader = withContext("thead", "header", {
  defaultProps: {
    "data-slot": "table-header",
  },
});

const TableBody = withContext("tbody", "body", {
  defaultProps: {
    "data-slot": "table-body",
  },
});

const TableFooter = withContext("tfoot", "footer", {
  defaultProps: {
    "data-slot": "table-footer",
  },
});

const TableRow = withContext("tr", "row", {
  defaultProps: {
    "data-slot": "table-row",
  },
});

const TableHead = withContext("th", "head", {
  defaultProps: {
    "data-slot": "table-head",
  },
});

const TableCell = withContext("td", "cell", {
  defaultProps: {
    "data-slot": "table-cell",
  },
});

const TableCaption = withContext("caption", "caption", {
  defaultProps: {
    "data-slot": "table-caption",
  },
});

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption };
