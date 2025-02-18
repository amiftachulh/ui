import * as React from "react";
import { css, cx } from "styled-system/css";
import { table } from "styled-system/recipes";

const classes = table();

const Table = ({ className, ...props }: React.ComponentProps<"table">) => (
  <div className={css({ pos: "relative", w: "full", overflow: "auto" })}>
    <table className={cx(classes.root, className)} {...props} />
  </div>
);
Table.displayName = "Table";

const TableHeader = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead className={cx(classes.header, className)} {...props} />
);
TableHeader.displayName = "TableHeader";

const TableBody = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody className={cx(classes.body, className)} {...props} />
);
TableBody.displayName = "TableBody";

const TableFooter = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={cx(classes.footer, className)} {...props} />
);
TableFooter.displayName = "TableFooter";

const TableRow = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={cx(classes.row, className)} {...props} />
);
TableRow.displayName = "TableRow";

const TableHead = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th className={cx(classes.head, className)} {...props} />
);
TableHead.displayName = "TableHead";

const TableCell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td className={cx(classes.cell, className)} {...props} />
);
TableCell.displayName = "TableCell";

const TableCaption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption className={cx(classes.caption, className)} {...props} />
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption };
