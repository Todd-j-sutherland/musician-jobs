"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  console.log({ session, status });

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
