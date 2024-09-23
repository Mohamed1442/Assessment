import React from "react";
import styles from "../styles/todo-list.module.css";
import { Todo } from "../types/todo-list.types";

interface TodoItemProps {
  todo: Todo;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleDone,
  onDelete,
}) => {
  return (
    <div className={styles["todo-item"]}>
      <div>
        <p
          className={`${styles["todo-item-title"]} ${
            todo.done ? styles.done : ""
          }`}
        >
          {todo.title}
        </p>
        <p
          className={`${styles["todo-item-description"]} ${
            todo.done ? styles.done : ""
          }`}
        >
          {todo.description}
        </p>
      </div>
      <div className={styles.control}>
        <input
          aria-label="check todo"
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleDone(todo.id)}
        />
        <button
          className={styles.closeButton}
          onClick={() => onDelete(todo.id)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
