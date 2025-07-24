"use client";

import { useState } from "react";
import {
  Country,
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
} from "react-phone-number-input";
import { styled } from "styled-system/jsx";
import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputFormattingValue() {
  const [country, setCountry] = useState<Country>();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <PhoneInput
        value={phoneNumber}
        onChange={setPhoneNumber}
        onCountryChange={setCountry}
        placeholder="Enter a phone number"
      />
      <styled.div css={{ mt: "4", spaceY: "2", textStyle: "sm" }}>
        <div>National: {phoneNumber && formatPhoneNumber(phoneNumber)}</div>
        <div>International: {phoneNumber && formatPhoneNumberIntl(phoneNumber)}</div>
        <div>Country code: {country && getCountryCallingCode(country)}</div>
      </styled.div>
    </div>
  );
}
