"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const TopNav = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-secondary">
            Musician App
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link href="/profileList" className="hover:text-secondary">
            Search Musicians
          </Link>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <>
              <span className="">Hello, {session.user?.name}</span>
              <button
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark"
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
