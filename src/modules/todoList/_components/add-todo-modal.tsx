import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "../styles/add-todo-modal.module.css";
import { TodoFields } from "../types/todo-list.types";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(1, "Title cannot be empty"),
  description: Yup.string()
    .required("Description is required")
    .min(1, "Description cannot be empty"),
});

interface AddTodoModalProps {
  onAddTodo: (todo: TodoFields) => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ onAddTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFields>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: TodoFields) => {
    reset();
    setIsOpen(false);
    onAddTodo(data);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    reset();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className={styles["btn-container"]}>
        <button
          onClick={() => setIsOpen(true)}
          className={styles["add-todo-btn"]}
        >
          Add Todo
        </button>
      </div>

      {isOpen && (
        <div onClick={handleCloseModal} className={styles.modalOverlay}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <h2 className={styles.modalTitle}>Create New Todo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Title"
                {...register("title")}
              />
              {errors.title && (
                <p className={styles.error}>{errors.title.message}</p>
              )}

              <input
                className={styles.inputField}
                type="text"
                placeholder="Description"
                {...register("description")}
              />
              {errors.description && (
                <p className={styles.error}>{errors.description.message}</p>
              )}

              <button type="submit" className={styles.submitButton}>
                Add Todo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodoModal;
