import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  const profileContainerStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "400px",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
  };

  const h1Style = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  };

  const pStyle = {
    fontSize: "16px",
    color: "#666",
  };

  return loading ? (
    <Loader />
  ) : (
    <div style={profileContainerStyle}>
      <h1 style={h1Style}>{user?.name}</h1>
      <p style={pStyle}>{user?.email}</p>
    </div>
  );
};

export default Profile;
