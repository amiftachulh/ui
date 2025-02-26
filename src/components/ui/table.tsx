import * as React from "react";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { table } from "styled-system/recipes";

const classes = table();

const Root = ({ className, ...props }: React.ComponentProps<"table">) => (
  <div className={css({ pos: "relative", w: "full", overflow: "auto" })}>
    <table className={cx(classes.root, className)} {...props} />
  </div>
);
const Table = styled(Root);
Table.displayName = "Table";

const Header = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead className={cx(classes.header, className)} {...props} />
);
const TableHeader = styled(Header);
TableHeader.displayName = "TableHeader";

const Body = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody className={cx(classes.body, className)} {...props} />
);
const TableBody = styled(Body);
TableBody.displayName = "TableBody";

const Footer = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={cx(classes.footer, className)} {...props} />
);
const TableFooter = styled(Footer);
TableFooter.displayName = "TableFooter";

const Row = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={cx(classes.row, className)} {...props} />
);
const TableRow = styled(Row);
TableRow.displayName = "TableRow";

const Head = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th className={cx(classes.head, className)} {...props} />
);
const TableHead = styled(Head);
TableHead.displayName = "TableHead";

const Cell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td className={cx(classes.cell, className)} {...props} />
);
const TableCell = styled(Cell);
TableCell.displayName = "TableCell";

const Caption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption className={cx(classes.caption, className)} {...props} />
);
const TableCaption = styled(Caption);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption };
