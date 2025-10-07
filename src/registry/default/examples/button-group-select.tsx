"use client";

import * as React from "react";
import { LuArrowRight } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Input } from "@/registry/default/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/registry/default/ui/select";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];

export default function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger css={{ fontFamily: "mono" }}>{currency}</SelectTrigger>
          <SelectContent css={{ minW: "24" }}>
            {CURRENCIES.map((currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                {currency.value}{" "}
                <styled.span css={{ color: "muted.fg" }}>{currency.label}</styled.span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <LuArrowRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
