"use client";

import { useState } from "react";
import NewItem from "./new-item.js";

export default function Page() {
    return (
        <main class="flex justify-center w-full">
            <NewItem />
        </main>
    );
}