"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const TopNav = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/">
            <span className="text-gray-800 hover:text-gray-600">
              Musician App
            </span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/profileList">
            <span className="text-gray-800 hover:text-gray-600">Profiles</span>
          </Link>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <>
              <span className="text-gray-800">Hello, {session.user.name}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
