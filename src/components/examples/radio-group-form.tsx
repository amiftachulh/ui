"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function RadioGroupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
      <styled.form onSubmit={form.handleSubmit(onSubmit)} w="2/3" spaceY="6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem spaceY="3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  display="flex"
                  flexDir="column"
                  spaceY="1"
                >
                  <FormItem display="flex" alignItems="center" spaceX="3" spaceY="0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel fontWeight="normal">All new messages</FormLabel>
                  </FormItem>
                  <FormItem display="flex" alignItems="center" spaceX="3" spaceY="0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel fontWeight="normal">Direct messages and mentions</FormLabel>
                  </FormItem>
                  <FormItem display="flex" alignItems="center" spaceX="3" spaceY="0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel fontWeight="normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
