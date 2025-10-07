"use client";

import { createStyleContext } from "styled-system/jsx";
import { alert } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(alert);

const Alert = withProvider("div", "root");
const AlertIcon = withContext("span", "icon");
const AlertContent = withContext("div", "content");
const AlertTitle = withContext("div", "title");
const AlertDescription = withContext("div", "description");

export { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle };
