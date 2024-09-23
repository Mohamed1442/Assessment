import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import TodoList from "../../modules/todoList/todo-list.page";
import DashboardLayout from "../../layouts/dashboard.layout";
import App from "../../App";
import UsersList from "../../modules/usersList/usersList.page";
import FormValidation from "../../modules/formValidation/formValidation.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: ROUTES.TODO_LIST,
        element: <TodoList />,
      },
      {
        path: ROUTES.CUSTOM_HOOK,
        element: <UsersList />,
      },
      {
        path: ROUTES.FORM_VALIDATION,
        element: <FormValidation />,
      },
    ],
  },
]);

export default router;
