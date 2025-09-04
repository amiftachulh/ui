import Link from "next/link";
import { button } from "styled-system/recipes";

export default function ButtonLink() {
  return (
    <Link className={button({ variant: "outline" })} href="/docs/components/button">
      Link
    </Link>
  );
}
