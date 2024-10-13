import classes from "./Header.module.css";
import { header_actions } from "../../store/HeaderSlice/header_SLICE";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import handleActions from "../../store/handleActions";
const Header = ({ state }) => {
  const dispatch = useDispatch();
  const {toggleStatus, followLink} = handleActions(header_actions, dispatch)
  const { status, url } = state;
  return useMemo(() => {
    return (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          {status ? (
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={()=>toggleStatus()}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <button onClick={()=>toggleStatus()}>Log in</button>
              </li>
            </ul>
          )}
        </nav>
      </header>
    );
  }, [state]);
};

export default Header;
