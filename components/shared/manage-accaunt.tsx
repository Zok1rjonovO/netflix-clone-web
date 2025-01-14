"use client";
import { LockKeyhole, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import CreateAccountForm from "../form/create-account-form";
import LoginAccountForm from "../form/login-account-form";
import { DialogTitle } from "@radix-ui/react-dialog";
// import ClearSessionButton from "../ClearSessionButton";

const ManageAccaunt = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"Login" | "create">("create");
  return (
    <div
      className={
        "min-h-screen flex justify-center flex-col items-center relative"
      }
    >
      <div className={"flex justify-center flex-col items-center"}>
        <h1 className={"text-white font-bold text-5xl my-12"}>
          Who's Watching?
        </h1>
        <ul className="flex p-0 my-12">
          <li
            onClick={() => {
              setOpen(true);
              setState("Login");
            }}
            className="max-w-[200px] x-[155px] cursor-pointer flex flex-col items-center gap-3 min-w-[200px]"
          >
            <div className="relative">
              <div
                className={
                  "max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] object-cover w-[155px] h-[155px] relative"
                }
              >
                <img
                  src={
                    "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                  }
                  alt={"account"}
                />
              </div>
              {isDelete ? (
                <div
                  className={"absolute transform bottom-0 z-10 cursor-pointer"}
                >
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xl">Olimjon</span>
              <LockKeyhole />
            </div>
          </li>
          <li
            onClick={() => {
              setOpen(true);
              setState("create");
            }}
            className="border bg-[#e5b109] font-bold text-xl border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center"
          >
            Add Account
          </li>
        </ul>

        <Button
          onClick={() => setIsDelete((prev) => !prev)}
          className="bg-transparent rounded-none border hover:bg-transparent !text-white border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5rem] py-[0.5rem]"
        >
          Manage Profiles
        </Button>
        {/* <ClearSessionButton /> */}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
          <DialogTitle>
            {/* <h1>idk what to write</h1> */}
          </DialogTitle>
        <DialogContent>
          {state === "Login" && <LoginAccountForm />}
          {state === "create" && <CreateAccountForm />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageAccaunt;
