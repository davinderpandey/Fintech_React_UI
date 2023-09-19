import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
    // Reset user state
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;