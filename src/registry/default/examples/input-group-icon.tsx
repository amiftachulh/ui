import { LuCheck, LuCreditCard, LuInfo, LuMail, LuSearch, LuStar } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";

export default function InputGroupIcon() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <LuSearch />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <LuMail />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <LuCreditCard />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <LuCheck />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <LuStar />
          <LuInfo />
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
