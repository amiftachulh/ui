import * as React from "react";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { table } from "styled-system/recipes";

const classes = table();

function Root({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className={css({ pos: "relative", w: "full", overflow: "auto" })}>
      <table className={cx(classes.root, className)} {...props} />
    </div>
  );
}
const Table = styled(Root);
Table.displayName = "Table";

function Header({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead className={cx(classes.header, className)} {...props} />;
}
const TableHeader = styled(Header);
TableHeader.displayName = "TableHeader";

function Body({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody className={cx(classes.body, className)} {...props} />;
}
const TableBody = styled(Body);
TableBody.displayName = "TableBody";

function Footer({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <tfoot className={cx(classes.footer, className)} {...props} />;
}
const TableFooter = styled(Footer);
TableFooter.displayName = "TableFooter";

function Row({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr className={cx(classes.row, className)} {...props} />;
}
const TableRow = styled(Row);
TableRow.displayName = "TableRow";

function Head({ className, ...props }: React.ComponentProps<"th">) {
  return <th className={cx(classes.head, className)} {...props} />;
}
const TableHead = styled(Head);
TableHead.displayName = "TableHead";

function Cell({ className, ...props }: React.ComponentProps<"td">) {
  return <td className={cx(classes.cell, className)} {...props} />;
}
const TableCell = styled(Cell);
TableCell.displayName = "TableCell";

function Caption({ className, ...props }: React.ComponentProps<"caption">) {
  return <caption className={cx(classes.caption, className)} {...props} />;
}
const TableCaption = styled(Caption);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption };
