"use client";

import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function ToastDanger() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "danger",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <Toast.Action altText="Try again">Try again</Toast.Action>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
