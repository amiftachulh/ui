"use client";

import { useForm } from "react-hook-form";
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
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

export default function SwitchForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      security_emails: true,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <styled.pre
          css={{ mt: "2", w: "340px", rounded: "md", bg: "slate.950", p: "4", borderWidth: "1px" }}
        >
          <styled.code css={{ color: "white" }}>{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <styled.form onSubmit={form.handleSubmit(onSubmit)} css={{ w: "full", spaceY: "6" }}>
        <div>
          <styled.h3 css={{ mb: "4", textStyle: "lg", fontWeight: "medium" }}>
            Email Notifications
          </styled.h3>
          <styled.div css={{ spaceY: "4" }}>
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem
                  css={{
                    display: "flex",
                    flexDir: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    rounded: "lg",
                    borderWidth: "1px",
                    p: "4",
                  }}
                >
                  <styled.div css={{ spaceY: "0.5" }}>
                    <FormLabel css={{ textStyle: "md" }}>Marketing emails</FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </styled.div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem
                  css={{
                    display: "flex",
                    flexDir: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    rounded: "lg",
                    borderWidth: "1px",
                    p: "4",
                  }}
                >
                  <styled.div css={{ spaceY: "0.5" }}>
                    <FormLabel css={{ textStyle: "md" }}>Security emails</FormLabel>
                    <FormDescription>Receive emails about your account security.</FormDescription>
                  </styled.div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </styled.div>
        </div>
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
