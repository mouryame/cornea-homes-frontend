import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../slices/theme";

export default function useTheme() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function setTheme(theme) {
    return dispatch(changeTheme(theme));
  }

  return [theme, setTheme];
}
