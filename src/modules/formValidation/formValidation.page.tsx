import toast, { Toaster } from "react-hot-toast";
import RegistrationForm from "./_components/registrationForm";
import styles from "./styles/formValidation.module.css";
import { RegistrationFields } from "./types/formValidation.types";

const FormValidation = () => {
  const handleSubmittedForm = (data: RegistrationFields) => {
    toast.success("Form submitted successfully");
    // handle the data to be sent to BE and so on
    console.log(data);
  };

  return (
    <>
      <p className={styles.instruction}>Click below to start registration</p>
      <RegistrationForm onRegister={handleSubmittedForm} />
      <Toaster />
    </>
  );
};

export default FormValidation;
