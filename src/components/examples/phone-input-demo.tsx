"use client";

import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function PhoneInputDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <styled.pre mt="2" w="340px" rounded="md" bg="slate.950" p="4" borderWidth="1px">
          <styled.code color="white">{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <styled.form
        onSubmit={form.handleSubmit(onSubmit)}
        display="flex"
        flexDir="column"
        alignItems="flex-start"
        spaceY="8"
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem display="flex" flexDir="column" alignItems="flex-start">
              <FormLabel textAlign="left">Phone Number</FormLabel>
              <FormControl w="full">
                <PhoneInput placeholder="Enter a phone number" {...field} />
              </FormControl>
              <FormDescription textAlign="left">Enter a phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <pre>
          <styled.code color="fg">{JSON.stringify(form.watch("phone"), null, 2)}</styled.code>
        </pre>
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
