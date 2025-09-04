"use client";

import { useState } from "react";
import { PhoneInput } from "@/registry/default/ui/phone-input";

export default function PhoneInputNational() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={setPhoneNumber}
      international={false}
      defaultCountry="ID"
      placeholder="Enter a phone number"
    />
  );
}
