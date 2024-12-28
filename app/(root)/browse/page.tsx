"use client";

import Login from "@/components/shared/login";
import ManageAccaunt from "@/components/shared/manage-accaunt";
import { useGlobalContext } from "@/context";
import { useSession } from "next-auth/react";

const Page = () => {
  const { account } = useGlobalContext();
  const { data: session } = useSession();
  console.log(session);
  if (account === null) return <ManageAccaunt />;
  if (session === null) return <Login />;
  return (
    <div>
      <h1>Browse Page</h1>
    </div>
  );
};

export default Page;
