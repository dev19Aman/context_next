import React from "react";
import LoginForm from "../pages/login";
import Home from "../pages/home";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? <LoginForm /> : <Home />}</>;
};

export default Auth;