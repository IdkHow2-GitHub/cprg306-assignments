"use client"; // Mark this file as a Client Component

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (user)
    return (
      <main className="m-10">
        <div className="flex flex-col items-center p-5">
          <div className="m-3">
            <h1 className="text-6xl text-center">Welcome to the</h1>
            <h1 className="text-6xl text-center">Shopping List</h1>{" "}
          </div>
          <div className="m-3 p-5 w-2/6 bg-slate-700 rounded-3xl">
            {/* top half */}
            <div className="flex justify-between max-w-6xl">
              {/* welcoming user (left) */}
              <div className="m-3">
                <div className="flex">
                  <p className="text-2xl max-w-sm whitespace-break-spaces">
                    Hey there,{" "}
                  </p>
                  <p className="text-2xl max-w-sm text-amber-200">
                    {user.displayName}
                  </p>
                  <p className="text-2xl max-w-xs">!</p>
                </div>
                <p className="text-2xl max-w-xs">
                  Let's check out your shopping list.
                </p>
              </div>
              {/* image and email display (right) */}
              <div className="m-3 flex flex-col justify-end">
                <img
                  className="rounded-full border-4 max-h-28 max-w-28"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            </div>
            {/* bottom half */}
            <div className="flex justify-between">
              <Link
                className="m-3 font-black p-2 outline-4 outline rounded-lg text-white outline-green-300 bg-green-500 hover:bg-gray-800 hover:outline-gray-500 hover:text-green-400"
                href="./week-9/shopping-list/"
              >
                Go to Shopping List
              </Link>
              <button
                className="m-3 w-28 font-black p-2 outline-4 outline rounded-lg text-white outline-red-300 bg-red-500 hover:bg-stone-800 hover:outline-stone-500 hover:text-red-400"
                onClick={firebaseSignOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  else if (!user)
    return (
      <main className="m-10">
        <div className="flex flex-col items-center p-5">
          <div className="m-3">
            <h1 className="text-6xl text-center">Welcome to the</h1>
            <h1 className="text-6xl text-center">Shopping List</h1>{" "}
          </div>
          <div className="m-3 p-5 w-2/6 bg-slate-700 rounded-3xl">
            {/* top half */}
            <div className="flex flex-col justify-center">
              <p className="m-3 text-5xl text-center font-bold text-amber-200">
                WOAH!!!
              </p>
              <p className="m-3 text-3xl max-w-6xl text-center">
                You are not logged in! Please login to continue.
              </p>
            </div>
            {/* bottom half */}
            <div className="flex justify-center">
              <button
                className="m-3 font-black p-2 outline-4 outline rounded-lg text-white outline-cyan-300 bg-cyan-500 hover:bg-zinc-800 hover:outline-zinc-500 hover:text-cyan-400"
                onClick={gitHubSignIn}
              >
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </main>
    );
}
