import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export function CodeViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View code</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your current prompt and settings
            into your application.
          </DialogDescription>
        </DialogHeader>
        <styled.div css={{ display: "grid", gap: "4" }}>
          <styled.div css={{ rounded: "md", bg: "black", p: "6" }}>
            <pre>
              <styled.code
                css={{
                  display: "grid",
                  gap: "1",
                  textStyle: "sm",
                  color: "white",
                  "& span": { h: "4" },
                }}
              >
                <span>
                  <styled.span css={{ color: "sky.300" }}>import</styled.span> os
                </span>
                <span>
                  <styled.span css={{ color: "sky.300" }}>import</styled.span> openai
                </span>
                <span />
                <span>
                  openai.api_key = os.getenv(
                  <styled.span css={{ color: "green.300" }}>&quot;OPENAI_API_KEY&quot;</styled.span>
                  )
                </span>
                <span />
                <span>response = openai.Completion.create(</span>
                <span>
                  {" "}
                  model=
                  <styled.span css={{ color: "green.300" }}>&quot;davinci&quot;</styled.span>,
                </span>
                <span>
                  {" "}
                  prompt=<styled.span css={{ color: "amber.300" }}>&quot;&quot;</styled.span>,
                </span>
                <span>
                  {" "}
                  temperature=<styled.span css={{ color: "amber.300" }}>0.9</styled.span>,
                </span>
                <span>
                  {" "}
                  max_tokens=<styled.span css={{ color: "amber.300" }}>5</styled.span>,
                </span>
                <span>
                  {" "}
                  top_p=<styled.span css={{ color: "amber.300" }}>1</styled.span>,
                </span>
                <span>
                  {" "}
                  frequency_penalty=<styled.span css={{ color: "amber.300" }}>0</styled.span>,
                </span>
                <span>
                  {" "}
                  presence_penalty=<styled.span css={{ color: "green.300" }}>0</styled.span>,
                </span>
                <span>)</span>
              </styled.code>
            </pre>
          </styled.div>
          <div>
            <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
              Your API Key can be found here. You should use environment variables or a secret
              management tool to expose your key to your applications.
            </styled.p>
          </div>
        </styled.div>
      </DialogContent>
    </Dialog>
  );
}
