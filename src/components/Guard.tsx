import { useEffect } from "react";
import type { GuardPropsType } from "../types/guard.types";
import { useLocation, useNavigate } from "react-router";
import { getToken, resetToken, setToken } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { availableRoutes } from "../configs/routes.config";
import { _UsersService } from "../services/users";
import { setUserAuth, userId } from "../store/userSlice";

function Guard(props: GuardPropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = useSelector(getToken);
  const user = useSelector(userId);
  useEffect(() => {
    const handleAuth = async () => {
      const { middleware, isAuthRequired } = props.config;
      /*
       * Check client authentication
       */
      if (isAuthRequired) {
        if (accessToken) {
          dispatch(setToken({token: accessToken}));
          try {
            const response = await _UsersService.me.GET();
            dispatch(setUserAuth(response.data));
          } catch (error) {
            console.error('Authentication check failed:', error);
            dispatch(resetToken());
            return navigate(availableRoutes.login.path);
          }
        } else {
          return navigate(availableRoutes.login.path);
        }
      }
      /*
       * If middleware returns false, go to the previous page without any progress
       */
      if (middleware) {
        const result = await middleware();
        if (result === false) {
          navigate(-1);
          return;
        }
      }
    };
    handleAuth();
  }, [location, navigate, props.config, accessToken, user, dispatch]);

  return (
    <div id="guard-level">
      {props.children}
    </div>
  )
}

export default Guard;

