"use client";

import Login from "@/components/shared/login";
import { useGlobalContext } from "@/context";

const Page = () => {
  const { account } = useGlobalContext();
  if (account === null) return <Login />;
  return (
    <div>
      <h1>Browse Page</h1>
    </div>
  );
};

export default Page;
