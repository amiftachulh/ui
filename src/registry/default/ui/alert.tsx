"use client";

import { createStyleContext } from "styled-system/jsx";
import { alert } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(alert);

const Alert = withProvider("div", "root", {
  defaultProps: {
    "data-slot": "alert",
  },
});

const AlertIcon = withContext("span", "icon", {
  defaultProps: {
    "data-slot": "alert-icon",
  },
});

const AlertContent = withContext("div", "content", {
  defaultProps: {
    "data-slot": "alert-content",
  },
});

const AlertTitle = withContext("div", "title", {
  defaultProps: {
    "data-slot": "alert-title",
  },
});

const AlertDescription = withContext("div", "description", {
  defaultProps: {
    "data-slot": "alert-description",
  },
});

export { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle };
