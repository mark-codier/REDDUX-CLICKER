import { useMemo } from "react";
import classes from "./UserProfile.module.css";
import { useDispatch } from "react-redux";
import handleActions from "../../store/handleActions";
import { log_actions } from "../../store/LOG/log_SLICE";
const UserProfile = ({ state }) => {
  const { toggleReductStatus, enterData } = handleActions(
    log_actions,
    /** dispatch =*/ useDispatch()
  );
  const { userData, isRedacting } = state;
  return useMemo(() => {
    return (
      <main className={classes.profile}>
        <nav className={classes.nav}>
          <h2>My User Profile</h2>
          {!isRedacting && <button onClick={() => toggleReductStatus()}>
            Change Profile's Data
          </button>}
          {isRedacting && <button onClick={() => toggleReductStatus()}>
            Confirm the changing
          </button>}
          {/**Button for changing ProfilesData */}
        </nav>
        {isRedacting && (
          <form>
            <ul>
              {Object.keys(userData).map((item, i) => {
                return (
                  <li key={Math.random()}>
                    <label htmlFor={item}>{item}</label>
                    <input
                      id={item}
                      onBlur={(e) =>
                        enterData({
                          value: e.target.value,
                          typeOfInput: item,
                          typeOfData: 'userData'
                        })
                      }
                      defaultValue={userData[item]}
                      className={classes.input}
                    />
                  </li>
                );
              })}
            </ul>
          </form>
        )}
        {!isRedacting && (
          <ul>
            {Object.keys(userData).map((item, i) => {
              return (
                <li key={i}>
                  <label htmlFor="">{item}</label>
                  <div className={classes.value}>{userData[item]}</div>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    );
  }, [state]);
};

export default UserProfile;
