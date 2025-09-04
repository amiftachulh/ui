"use client";

import { card } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(card);

const Card = withProvider("div", "root");
const CardHeader = withContext("div", "header");
const CardTitle = withContext("div", "title");
const CardDescription = withContext("div", "description");
const CardAction = withContext("div", "action");
const CardContent = withContext("div", "content");
const CardFooter = withContext("div", "footer");

export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter };
