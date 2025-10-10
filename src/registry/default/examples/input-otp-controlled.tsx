"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/default/ui/input-otp";

export default function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
    <styled.div css={{ spaceY: "2" }}>
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <styled.div css={{ textAlign: "center", textStyle: "sm" }}>
        {value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </styled.div>
    </styled.div>
  );
}
