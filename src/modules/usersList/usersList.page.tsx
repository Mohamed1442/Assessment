import React from "react";

import useFetch from "../../hooks/useFetch";
import { User } from "./types/userList.types";
import styles from "./styles/usersList.module.css";
import Loader from "../../components/loader";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

const UsersList: React.FC = () => {
  const { data, loading, error } = useFetch<User[]>(USERS_API);

  if (loading) return <Loader />;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <ul className={styles.list}>
      {data?.map((user: User) => (
        <li key={user.id} className={styles["list-item"]}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
