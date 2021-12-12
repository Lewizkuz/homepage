import React, { Fragment } from "react";
import Link from "next/link";

export default function Main() {
  return (
    <Fragment>
      <h2>True Web understanding</h2>
      <p>Under your service</p>

      <Link href="/achievements">achievements</Link>
      <Link href="/lifeline">lifeline</Link>
    </Fragment>
  );
}
