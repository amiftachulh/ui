"use client";

import * as React from "react";
import { LuMinus } from "react-icons/lu";
import { OTPInput, OTPInputContext } from "input-otp";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { inputOtp } from "styled-system/recipes";
import { SystemStyleObject } from "styled-system/types";

const classes = inputOtp();

const StyledOTPInput = styled(OTPInput);

function InputOTP({
  containerCss,
  ...props
}: React.ComponentProps<typeof StyledOTPInput> & {
  containerCss?: SystemStyleObject;
}) {
  return (
    <StyledOTPInput
      data-slot="input-otp"
      containerClassName={cx(classes.container, css(containerCss))}
      className={classes.root}
      {...props}
    />
  );
}

function InputOTPGroup(props: React.ComponentProps<typeof styled.div>) {
  return <styled.div data-slot="input-otp-group" className={classes.group} {...props} />;
}

function InputOTPSlot({
  index,
  ...props
}: React.ComponentProps<typeof styled.div> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <styled.div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={classes.slot}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <styled.div
          css={{
            pointerEvents: "none",
            pos: "absolute",
            inset: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <styled.div css={{ animation: "caret-blink", bg: "fg", w: "1px", h: "4" }} />
        </styled.div>
      )}
    </styled.div>
  );
}

function InputOTPSeparator(props: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div data-slot="input-otp-separator" role="separator" {...props}>
      <LuMinus />
    </styled.div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
