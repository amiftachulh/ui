"use client";

import { useState } from "react";
import { PhoneInput } from "@/registry/default/ui/phone-input";

export default function PhoneInputInitial() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={setPhoneNumber}
      initialValueFormat="national"
      placeholder="Enter a phone number"
    />
  );
}
