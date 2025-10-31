import { LuRotateCcw } from "react-icons/lu";
import { Metadata } from "next";
import Image from "next/image";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";
import { Label } from "@/registry/default/ui/label";
import { Separator } from "@/registry/default/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { Textarea } from "@/registry/default/ui/textarea";
import { CodeViewer } from "./components/code-viewer";
import { MaxLengthSelector } from "./components/maxlength-selector";
import { ModelSelector } from "./components/model-selector";
import { PresetActions } from "./components/preset-actions";
import { PresetSave } from "./components/preset-save";
import { PresetSelector } from "./components/preset-selector";
import { PresetShare } from "./components/preset-share";
import { TemperatureSelector } from "./components/temperature-selector";
import { TopPSelector } from "./components/top-p-selector";
import { models, types } from "./data/models";
import { presets } from "./data/presets";

const title = "Playground";
const description = "The OpenAI Playground built using the components.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

export default function PlaygroundPage() {
  return (
    <>
      <styled.div css={{ md: { display: "none" } }}>
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className={css({ display: "block", _dark: { display: "none" } })}
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className={css({ display: "none", _dark: { display: "block" } })}
        />
      </styled.div>
      <styled.div css={{ display: "none", flex: "1", flexDir: "column", md: { display: "flex" } }}>
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2",
            p: "4",
            sm: {
              flexDir: "row",
              alignItems: "center",
              gap: "0",
            },
            md: {
              h: "16",
            },
          }}
        >
          <styled.h2 css={{ pl: "0.5", textStyle: "lg", fontWeight: "semibold" }}>
            Playground
          </styled.h2>
          <styled.div
            css={{
              ml: "auto",
              display: "flex",
              w: "full",
              gap: "2",
              sm: { justifyContent: "flex-end" },
            }}
          >
            <PresetSelector presets={presets} />
            <PresetSave />
            <styled.div css={{ display: "none", gap: "2", md: { display: "flex" } }}>
              <CodeViewer />
              <PresetShare />
            </styled.div>
            <PresetActions />
          </styled.div>
        </styled.div>
        <Separator />
        <Tabs defaultValue="complete" css={{ display: "flex", flex: "1", flexDir: "column" }}>
          <styled.div css={{ display: "flex", flex: "1", flexDir: "column", px: "4", py: "6" }}>
            <styled.div
              css={{
                display: "grid",
                flex: "1",
                alignItems: "stretch",
                gap: "6",
                md: { gridTemplateColumns: "1fr 200px" },
              }}
            >
              <styled.div
                css={{
                  display: "none",
                  flexDir: "column",
                  gap: "6",
                  sm: { display: "flex" },
                  md: { order: "2" },
                }}
              >
                <styled.div css={{ display: "grid", gap: "3" }}>
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <styled.span
                        css={{ textStyle: "sm", lineHeight: "none", fontWeight: "medium" }}
                      >
                        Mode
                      </styled.span>
                    </HoverCardTrigger>
                    <HoverCardContent css={{ w: "320px", textStyle: "sm" }} side="left">
                      Choose the interface that best suits your task. You can provide: a simple
                      prompt to complete, starting and ending text to insert a completion within, or
                      some text with instructions to edit it.
                    </HoverCardContent>
                  </HoverCard>
                  <TabsList
                    css={{
                      display: "grid",
                      w: "full",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      "& .tabs__trigger svg": {
                        w: "4",
                        h: "4",
                      },
                    }}
                  >
                    <TabsTrigger value="complete">
                      <styled.span css={{ srOnly: true }}>Complete</styled.span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="8.5" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="8.5" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="13" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger value="insert">
                      <styled.span css={{ srOnly: true }}>Insert</styled.span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                          fill="currentColor"
                        ></path>
                        <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="8.5" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="13" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger value="edit">
                      <styled.span css={{ srOnly: true }}>Edit</styled.span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="15" width="4" height="2" rx="1" fill="currentColor"></rect>
                        <rect x="8.5" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                        <path
                          d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </TabsTrigger>
                  </TabsList>
                </styled.div>
                <ModelSelector types={types} models={models} />
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </styled.div>
              <styled.div
                css={{
                  display: "flex",
                  flex: "1",
                  flexDir: "column",
                  "& > .tabs__content": { flex: "1" },
                  md: { order: "1" },
                }}
              >
                <TabsContent value="complete" css={{ mt: "0", borderWidth: "0", p: "0" }}>
                  <styled.div css={{ display: "flex", flexDir: "column", gap: "4", h: "full" }}>
                    <Textarea
                      placeholder="Write a tagline for an ice cream shop"
                      css={{ minH: "400px", flex: "1", p: "4", md: { minH: "700px" } }}
                    />
                    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
                      <Button>Submit</Button>
                      <Button variant="secondary">
                        <styled.span css={{ srOnly: true }}>Show history</styled.span>
                        <LuRotateCcw />
                      </Button>
                    </styled.div>
                  </styled.div>
                </TabsContent>
                <TabsContent
                  value="insert"
                  css={{
                    mt: "0",
                    display: "flex",
                    flexDir: "column",
                    gap: "4",
                    borderWidth: "0",
                    p: "0",
                  }}
                >
                  <styled.div
                    css={{
                      display: "grid",
                      h: "full",
                      gridTemplateRows: "repeat(2, 1fr)",
                      gap: "6",
                      md: { gridTemplateColumns: "repeat(2, 1fr)" },
                      lg: { gridTemplateRows: "1fr" },
                    }}
                  >
                    <Textarea
                      placeholder="We're writing to [inset]. Congrats from OpenAI!"
                      css={{ h: "full", minH: "300px", p: "4", lg: { minH: "700px" } }}
                    />
                    <styled.div
                      css={{ bg: "muted", rounded: "md", borderWidth: "1px" }}
                    ></styled.div>
                  </styled.div>
                  <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
                    <Button>Submit</Button>
                    <Button variant="secondary">
                      <styled.span css={{ srOnly: true }}>Show history</styled.span>
                      <LuRotateCcw />
                    </Button>
                  </styled.div>
                </TabsContent>
                <TabsContent
                  value="edit"
                  css={{
                    mt: "0",
                    display: "flex",
                    flexDir: "column",
                    gap: "4",
                    borderWidth: "0",
                    p: "0",
                  }}
                >
                  <styled.div
                    css={{
                      display: "grid",
                      h: "full",
                      gap: "6",
                      lg: { gridTemplateColumns: "repeat(2, 1fr)" },
                    }}
                  >
                    <styled.div css={{ display: "flex", flexDir: "column", gap: "4" }}>
                      <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "2" }}>
                        <Label htmlFor="input" css={{ srOnly: true }}>
                          Input
                        </Label>
                        <Textarea
                          id="input"
                          placeholder="We is going to the market."
                          css={{ flex: "1", p: "4", lg: { minH: "580px" } }}
                        />
                      </styled.div>
                      <styled.div css={{ display: "flex", flexDir: "column", gap: "2" }}>
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea id="instructions" placeholder="Fix the grammar." />
                      </styled.div>
                    </styled.div>
                    <styled.div
                      css={{
                        bg: "muted",
                        minH: "400px",
                        rounded: "md",
                        borderWidth: "1px",
                        lg: { minH: "700px" },
                      }}
                    />
                  </styled.div>
                  <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
                    <Button>Submit</Button>
                    <Button variant="secondary">
                      <styled.span css={{ srOnly: true }}>Show history</styled.span>
                      <LuRotateCcw />
                    </Button>
                  </styled.div>
                </TabsContent>
              </styled.div>
            </styled.div>
          </styled.div>
        </Tabs>
      </styled.div>
    </>
  );
}
