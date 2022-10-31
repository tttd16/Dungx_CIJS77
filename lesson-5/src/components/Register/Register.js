import "./register.css";
import React, { useEffect } from "react";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    user: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      name,
      user,
    };
    fetch("https://635d3171cb6cf98e56af26a9.mockapi.io/api/v1/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((res) => {
      } );
  };

  return (
    <section>
      <form className="infoform" onSubmit={handleSubmitForm}>
        <label>Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {name.length < 6 ? <div>{'user phải từ 6 ký tự trở lên'}</div> : <></>}
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>User</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {password !=  confirmpassword ? <div>{'khac nhau'}</div> : <></>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Register;
