"use client";

import { useState } from "react";
import { PhoneInput } from "@/registry/default/ui/phone-input";

export default function PhoneInputInternational() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput value={phoneNumber} onChange={setPhoneNumber} international defaultCountry="ID" />
  );
}
