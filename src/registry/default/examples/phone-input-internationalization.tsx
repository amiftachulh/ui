"use client";

import { useState } from "react";
import ja from "react-phone-number-input/locale/ja";
import { PhoneInput } from "@/registry/default/ui/phone-input";

export default function PhoneInputInternationalization() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={setPhoneNumber}
      labels={ja}
      placeholder="電話番号を入力してください"
    />
  );
}
