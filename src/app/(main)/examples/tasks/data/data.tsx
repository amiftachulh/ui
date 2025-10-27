import {
  LuArrowDown,
  LuArrowRight,
  LuArrowUp,
  LuCircle,
  LuCircleCheck,
  LuCircleHelp,
  LuCircleOff,
  LuTimer,
} from "react-icons/lu";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: LuCircleHelp,
  },
  {
    value: "todo",
    label: "Todo",
    icon: LuCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: LuTimer,
  },
  {
    value: "done",
    label: "Done",
    icon: LuCircleCheck,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: LuCircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: LuArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: LuArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: LuArrowUp,
  },
];
