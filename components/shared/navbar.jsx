"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-col sm:flex-row w-full border-b border-blue-400 justify-between px-8 py-2 items-center">
      <h1>
        <Link href={"/"}>WritoCode</Link>
      </h1>
      <div className="flex items-center gap-4 ">
        <span>
          <input
            type="text"
            required
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                console.log("Enter");
                router.push(`/search?search_query=${e.target.value}`);
              }
            }}
            placeholder="Search"
            className="px-2 border-2 py-1 min-w-full rounded-md"
          />
        </span>
        <span>
          <button
            className=" border-2 p-2 rounded-xl border-blue-500 px-4 py-2"
            onClick={() => {
              router.push("/create");
            }}
          >
            Create
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
