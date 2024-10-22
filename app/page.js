"use client";
import { useState } from "react";

import Link from "next/link";

export default function Home() {
  function handleWIP() {
    alert(
      "This assignment is a work in progress! Note that everything you're about to see it subject to change."
    );
  }
  function handleNotReady() {
    alert("This assignment is not ready yet! Please check back later.");
  }

  return (
    <main>
      <div className="">
        <h1>
          <b>CPRG 306: Web Development 2 - Assignments</b>
        </h1>
        <Link href="week-2">Week 2 Assignment</Link>
        <br />
        <Link href="week-3">Week 3 Assignment</Link>
        <br />
        <Link href="week-4">Week 4 Assignment</Link>
        <br />
        <Link href="week-5">Week 5 Assignment</Link>
        <br />
        <Link href="week-6">Week 6 Assignment</Link>
        <br />
        <Link href="week-7">Week 7 Assignment</Link>
        <br />
        <Link className="text-yellow-400" onClick={handleWIP} href={"week-8"}>
          Week 8 Assignment
        </Link>
        <br />
        <button className="text-red-400" onClick={handleNotReady}>
          Week 9 Assignment
        </button>
        <br />
        <button className="text-red-400" onClick={handleNotReady}>
          Week 10 Assignment
        </button>
      </div>
    </main>
  );
}
