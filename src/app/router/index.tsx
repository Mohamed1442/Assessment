import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import TodoList from "../../modules/todoList/todo-list.page";
import DashboardLayout from "../../layouts/dashboard.layout";
import App from "../../App";

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
    ],
  },
]);

export default router;
