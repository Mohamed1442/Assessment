import { useEffect, useState } from "react";
import styles from "./styles/todo-list.module.css";
import AddTodoModal from "./_components/add-todo-modal";
import TodoItem from "./_components/todo-item";
import { Todo, TodoFields } from "./types/todo-list.types";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../app/utils/local-storage";
import TodoFilter from "./_components/select-todo-status";

const localStorageTodoList = getLocalStorage("todo");

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(localStorageTodoList || []);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );

  const handleAddTodo = (data: TodoFields) => {
    const todo: Todo = { ...data, id: Math.random(), done: false };
    setTodoList((prev) => [...prev, todo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "completed") return todo.done;
    if (filter === "incomplete") return !todo.done;
    return true;
  });

  useEffect(() => {
    setLocalStorage("todo", todoList);
  }, [todoList]);

  return (
    <div>
      <div className={styles.container}>
        <TodoFilter filter={filter} onChange={setFilter} />
        <AddTodoModal onAddTodo={handleAddTodo} />
      </div>
      {!todoList.length ? (
        <p className={styles["empty-list"]}>No more Todo items</p>
      ) : (
        <div className={styles["todo-list-container"]}>
          {filteredTodoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleDone={handleToggleDone}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
