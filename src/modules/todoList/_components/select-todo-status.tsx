import React from "react";
import styles from "../styles/select-todo-status.module.css";
import { ESelectStatus } from "../types/todo-list.types";

interface TodoFilterProps {
  filter: string;
  onChange: (filter: ESelectStatus) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onChange }) => {
  return (
    <select
      name="select-todo"
      title="select-todo"
      className={styles.filter}
      value={filter}
      onChange={(e) => onChange(e.target.value as ESelectStatus)}
    >
      <option value={ESelectStatus.ALL}>All Todos</option>
      <option value={ESelectStatus.COMPLETED}>Completed</option>
      <option value={ESelectStatus.IN_COMPLETED}>Incomplete</option>
    </select>
  );
};

export default TodoFilter;
