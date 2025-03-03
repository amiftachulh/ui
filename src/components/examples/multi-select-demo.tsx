"use client";

import React, { useState } from "react";
import { LuCat, LuDog, LuFish, LuRabbit, LuTurtle } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { MultiSelect } from "@/components/ui/multi-select";

const frameworksList = [
  { value: "react", label: "React", icon: LuTurtle },
  { value: "angular", label: "Angular", icon: LuCat },
  { value: "vue", label: "Vue", icon: LuDog },
  { value: "svelte", label: "Svelte", icon: LuRabbit },
  { value: "ember", label: "Ember", icon: LuFish },
];

export default function MultiSelectDemo() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);

  return (
    <styled.div p="4" w="full">
      <styled.h1 textStyle="lg" fontWeight="bold" mb="4">
        Multi-Select Component
      </styled.h1>
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select frameworks"
        maxCount={3}
      />
      <styled.div mt="4">
        <styled.h2 textStyle="md" fontWeight="semibold">
          Selected Frameworks:
        </styled.h2>
        <styled.ul listStyleType="disc" textStyle="sm" listStylePosition="inside">
          {selectedFrameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </styled.ul>
      </styled.div>
    </styled.div>
  );
}
