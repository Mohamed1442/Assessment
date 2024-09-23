import { ROUTES } from "../constants/routes";

interface SidebarItem {
  label: string;
  to: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Todo List",
    to: ROUTES.TODO_LIST,
  },
  {
    label: "Custom Hook",
    to: ROUTES.CUSTOM_HOOK,
  },
  {
    label: "Form Validation",
    to: ROUTES.FORM_VALIDATION,
  },
  {
    label: "Optimization",
    to: ROUTES.COMPONENT_OPTIMIZATION,
  },
];

export default sidebarItems;
