import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function CardDemo() {
  return (
    <Card css={{ w: "full", maxW: "sm" }}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "6" }}>
            <styled.div css={{ display: "grid", gap: "2" }}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </styled.div>
            <styled.div css={{ display: "grid", gap: "2" }}>
              <styled.div css={{ display: "flex", alignItems: "center" }}>
                <Label htmlFor="password">Password</Label>
                <styled.a
                  href="#"
                  css={{
                    ml: "auto",
                    display: "inline-block",
                    textStyle: "sm",
                    textUnderlineOffset: "4px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Forgot your password?
                </styled.a>
              </styled.div>
              <Input id="password" type="password" required />
            </styled.div>
          </styled.div>
        </form>
      </CardContent>
      <CardFooter css={{ flexDir: "column", gap: "2" }}>
        <Button type="submit" css={{ w: "full" }}>
          Login
        </Button>
        <Button variant="outline" css={{ w: "full" }}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
