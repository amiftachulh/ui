import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardDemo() {
  return (
    <Card css={{ w: "350px" }}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <styled.div css={{ display: "grid", w: "full", alignItems: "center", gap: "4" }}>
            <styled.div css={{ display: "flex", flexDir: "column", gap: "1.5" }}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </styled.div>
            <styled.div css={{ display: "flex", flexDir: "column", gap: "1.5" }}>
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </styled.div>
          </styled.div>
        </form>
      </CardContent>
      <CardFooter css={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
