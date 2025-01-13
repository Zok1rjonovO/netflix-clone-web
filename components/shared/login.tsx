import Image from "next/image";
import React from "react";
import image from "../../assets/image.webp";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className={"w-full h-screen"}>
      <div className="absolute inset-0">
        <Image src={image} alt={"bg"} fill></Image>
      </div>
      <div className="relative z-10 rounded-md w-[500px] bg-black/60 h-[50vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 ">
        <div className="flex h-full items-center justify-center flex-col">
          <h1 className={"text-4xl font-bold "}>login</h1>

          <Button
            onClick={() => signIn("github")}
            className={
              "mt-4 flex items-center gap-2 w-full h-[56px] bg-red-600 !text-white hover:bg-red-500"
            }
          >
            <AiFillGithub className={"w-7 h-7"} />
            signin with github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;