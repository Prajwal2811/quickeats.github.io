import useAuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, login, logout } = useAuthContext();

  const isLoggedIn = !!user;

  return { user, isLoggedIn, login, logout };
};

export default useAuth;
