import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/features/auth/authSlice";

const useAuthChecked = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const localAuth = localStorage.getItem("Auth");
    const auth = JSON.parse(localAuth);
    if (auth?.user && auth?.token) {
      const { user, token } = auth;
      dispatch(signIn({ user, token }));
    }

    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};

export default useAuthChecked;
