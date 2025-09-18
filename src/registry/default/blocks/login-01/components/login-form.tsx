import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export function LoginForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "6", ...css }} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <styled.div css={{ display: "flex", flexDir: "column", gap: "6" }}>
              <styled.div css={{ display: "grid", gap: "3" }}>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </styled.div>
              <styled.div css={{ display: "grid", gap: "3" }}>
                <styled.div css={{ display: "flex", alignItems: "center" }}>
                  <Label htmlFor="password">Password</Label>
                  <styled.a
                    href="#"
                    css={{
                      ml: "auto",
                      display: "inline-block",
                      textStyle: "sm",
                      textUnderlineOffset: "4px",
                      _hover: { textDecoration: "underline" },
                    }}
                  >
                    Forgot your password?
                  </styled.a>
                </styled.div>
                <Input id="password" type="password" required />
              </styled.div>
              <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
                <Button type="submit" css={{ w: "full" }}>
                  Login
                </Button>
                <Button variant="outline" css={{ w: "full" }}>
                  Login with Google
                </Button>
              </styled.div>
            </styled.div>
            <styled.div css={{ mt: "4", textAlign: "center", textStyle: "sm" }}>
              Don&apos;t have an account?{" "}
              <styled.a href="#" css={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>
                Sign up
              </styled.a>
            </styled.div>
          </form>
        </CardContent>
      </Card>
    </styled.div>
  );
}
