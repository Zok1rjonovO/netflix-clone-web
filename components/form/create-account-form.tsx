"use strict";

import { createAccountSchema } from "@/lib/validation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import OtpInput from "react-otp-input";

const CreateAccountForm = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: "",
      pin: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof createAccountSchema>) {
    console.log(values);
  }
  return (
    <>
      <h1 className={"text-white text-center font-bold text-3xl"}>
        Create your account
      </h1>
      <div className={"w-full h-[2px] bg-slate-500/20 mb-4"} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-3 "}>
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete={"off"}
                    className={"h-[56px]"}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormDescription>
                  Your name is used to identify your account.
                </FormDescription>
                <FormMessage className={"text-red-600"} />
              </FormItem>
            )}
            name={"name"}
          />

          <FormField
            control={form.control}
            name={"pin"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIN code</FormLabel>
                <FormControl>
                  <OtpInput
                    value={pin}
                    onChange={(value) => setPin(value)}
                    numInputs={4}
                    renderSeparator={
                      <span style={{ margin: "0 10px" }}>-</span>
                    }
                    renderInput={(props) => (
                      <input
                        {...props}
                        style={{
                          width: "70px",
                          height: "70px",
                          fontSize: "40px",
                          border: "1px solid white",
                          textAlign: "center",
                          margin: "10px",
                          // boshqa style'lar
                        }}
                        disabled={isLoading}
                      />
                    )}
                    // boshqa prop'lar
                  />
                </FormControl>
                <FormDescription>
                  Your pin is used to identify your account.
                </FormDescription>
                <FormMessage className={"text-red-600"} />
              </FormItem>
            )}
          />

          <Button
            className={
              "w-full bg-red-600 hover:bg-red-700 flex justify-center items-center h-[56px] !text-white"
            }
            disabled={isSubmitting}
            type={"submit"}
          >
            Create Account
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CreateAccountForm;
