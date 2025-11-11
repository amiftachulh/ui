"use client";

import { createStyleContext } from "styled-system/jsx";
import { card } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(card);

const Card = withProvider("div", "root", {
  defaultProps: {
    "data-slot": "card",
  },
});

const CardHeader = withContext("div", "header", {
  defaultProps: {
    "data-slot": "card-header",
  },
});

const CardTitle = withContext("div", "title", {
  defaultProps: {
    "data-slot": "card-title",
  },
});

const CardDescription = withContext("div", "description", {
  defaultProps: {
    "data-slot": "card-description",
  },
});

const CardAction = withContext("div", "action", {
  defaultProps: {
    "data-slot": "card-action",
  },
});

const CardContent = withContext("div", "content", {
  defaultProps: {
    "data-slot": "card-content",
  },
});

const CardFooter = withContext("div", "footer", {
  defaultProps: {
    "data-slot": "card-footer",
  },
});

export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter };
