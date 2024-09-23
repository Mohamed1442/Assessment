import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "../styles/registrationForm.module.css";
import { RegistrationFields } from "../types/formValidation.types";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(1, "Full Name cannot be empty"),
  email: Yup.string().required("Email is required").email("Email is not valid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  terms: Yup.bool()
    .required()
    .oneOf([true], "You must accept the terms and conditions"),
});

interface RegistrationFormProps {
  onRegister: (data: RegistrationFields) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFields>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: RegistrationFields) => {
    reset();
    setIsOpen(false);
    onRegister(data);
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
          Register
        </button>
      </div>

      {isOpen && (
        <div onClick={handleCloseModal} className={styles.modalOverlay}>
          <div className={styles.modalContent} onClick={handleModalClick}>
            <h2 className={styles.modalTitle}>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className={styles.error}>{errors.fullName.message}</p>
              )}

              <input
                className={styles.inputField}
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}

              <input
                className={styles.inputField}
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}

              <input
                className={styles.inputField}
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword.message}</p>
              )}

              <div className={styles["terms-container"]}>
                <label>
                  <input type="checkbox" {...register("terms")} />I agree to the
                  Terms and Conditions
                </label>
                {errors.terms && (
                  <p className={styles.error}>{errors.terms.message}</p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
