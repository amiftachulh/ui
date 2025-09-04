"use client";

import { useState } from "react";
import { PhoneInput } from "@/registry/default/ui/phone-input";

export default function PhoneInputDefaultCountry() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={setPhoneNumber}
      defaultCountry="ID"
      placeholder="Enter a phone number"
    />
  );
}
