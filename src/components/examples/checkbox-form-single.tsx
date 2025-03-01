"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

export default function CheckboxFormSingle() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: true,
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
      <styled.form onSubmit={form.handleSubmit(onSubmit)} spaceY="6">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem
              display="flex"
              flexDir="row"
              alignItems="flex-start"
              spaceX="3"
              spaceY="0"
              rounded="md"
              borderWidth="1px"
              p="4"
            >
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <styled.div spaceY="1" lineHeight="none">
                <FormLabel>Use different settings for my mobile devices</FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription>
              </styled.div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
