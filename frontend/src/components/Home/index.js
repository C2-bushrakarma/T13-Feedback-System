import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="container">
        <Link to="/login/admin">dashboard </Link>
        <Link to="/login/user">home </Link>
      </div>
    </>
  );
};
export default Home;
