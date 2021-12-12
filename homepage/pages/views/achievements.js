import React, { Fragment } from "react";
import Link from "next/link";

export default function Achievements() {
  // After the user enters the page (for the first time) an achievment will appear to the page when the user scrolls to the end.
  return (
    <Fragment>
      <h2>Achievements</h2>
      <p>Things I helped to surface</p>

      <Link href="/">Return</Link>
    </Fragment>
  );
}
