"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SVG from "@/assets/undraw_personal_text_re_vqj3.svg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Is your name that short?",
    })
    .max(50, {
      message: "That's a bit long..?",
    }),
  email: z.string().email(),
  message: z
    .string()
    .min(5, {
      message: "At least say 'hello'...",
    })
    .max(500, {
      message:
        "I know you're excited but keep it less than 500 chars please 😭..",
    }),
});

const Contact = () => {
  const [disabled, setDisabled] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { fullName, email, message } = values;

    fetch("https://formcarry.com/s/xURxmP-M4fe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name: fullName, Email: email, Message: message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setDisabled(true);

          toast({
            title: "Form Submitted",
            description: <p>I&apos;ll reach out to you ASAP.</p>,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: <p>Something didn&apos;t work..</p>,
          });
        }
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Error",
          description: <p>Something didn&apos;t work...</p>,
        });
      });
  };

  return (
    <div className="flex grow flex-col items-center gap-5 py-9">
      <Image src={SVG} alt="" className="mb-5 min-h-40 w-48" />

      <h1 className="text-center text-2xl font-semibold leading-none tracking-tighter">
        Contact Me
      </h1>

      <p className="max-w-64 text-center leading-snug">Send me a message.</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ryel Banfield" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="ryelbanfield@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hey, I want to be just like you when I grow up.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={disabled}>
            {!disabled ? <>Submit</> : <>Submitted!</>}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
