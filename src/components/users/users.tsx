import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.map((user: { name: string }) => user.name));
      })
      .catch((err) => {
        setErrors("Error in fetching users");
      });
  });

  return (
    <div>
      <h1>{errors}</h1>
      <ul>
        {users.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
