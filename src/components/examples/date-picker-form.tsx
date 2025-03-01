"use client";

import { useForm } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function DatePickerForm() {
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
      <styled.form onSubmit={form.handleSubmit(onSubmit)} spaceY="8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem display="flex" flexDir="column">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      w="240px"
                      pl="3"
                      textAlign="left"
                      fontWeight="normal"
                      color={!field.value ? "muted.fg" : undefined}
                    >
                      {field.value ? (
                        dayjs(field.value).format("YYYY-MM-DD")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <LuCalendar className={css({ ml: "auto", w: "4", h: "4", opacity: "0.5" })} />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent w="auto" p="0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </styled.form>
    </Form>
  );
}
