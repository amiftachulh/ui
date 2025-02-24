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
const StyledRoot = styled(Root);
StyledRoot.displayName = "Table";

const Header = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead className={cx(classes.header, className)} {...props} />
);
const StyledHeader = styled(Header);
StyledHeader.displayName = "TableHeader";

const Body = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody className={cx(classes.body, className)} {...props} />
);
const StyledBody = styled(Body);
StyledBody.displayName = "TableBody";

const Footer = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={cx(classes.footer, className)} {...props} />
);
const StyledFooter = styled(Footer);
StyledFooter.displayName = "TableFooter";

const Row = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={cx(classes.row, className)} {...props} />
);
const StyledRow = styled(Row);
StyledRow.displayName = "TableRow";

const Head = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th className={cx(classes.head, className)} {...props} />
);
const StyledHead = styled(Head);
StyledHead.displayName = "TableHead";

const Cell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td className={cx(classes.cell, className)} {...props} />
);
const StyledCell = styled(Cell);
StyledCell.displayName = "TableCell";

const Caption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption className={cx(classes.caption, className)} {...props} />
);
const StyledCaption = styled(Caption);
StyledCaption.displayName = "TableCaption";

const Table = {
  Root: StyledRoot,
  Header: StyledHeader,
  Body: StyledBody,
  Footer: StyledFooter,
  Row: StyledRow,
  Head: StyledHead,
  Cell: StyledCell,
  Caption: StyledCaption,
};

export { Table };
