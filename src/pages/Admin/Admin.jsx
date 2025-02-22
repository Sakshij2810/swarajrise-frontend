import "./Admin.css";
import React from "react";

const Admin = () => {
  const handleSubmit = () => {};
  return (
    <div className="admin-main-container">
      <div className="admin-content">
        <h1>Admin Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <h2>Email: </h2>
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="password">
            <h2>Password: </h2>
            <input type="password" name="password" id="password" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Admin;
