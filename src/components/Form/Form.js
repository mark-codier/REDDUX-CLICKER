import { useMemo } from "react";
import classes from "./Form.module.css";
import { log_actions } from "../../store/LOG/log_SLICE";
import handleActions from "../../store/handleActions";
import { useDispatch } from "react-redux";
import { header_actions } from "../../store/HeaderSlice/header_SLICE";
const Form = ({ state }) => {
  const { enterData, compareDatas } = handleActions(log_actions, useDispatch());
  const { toggleStatus } = handleActions(header_actions, useDispatch());
  const { formData } = state;
  return useMemo(() => {
    return (
      <form onSubmit={() => compareDatas(toggleStatus)}>
        <ul className={classes.ul}>
          {Object.keys(formData.inputsData).map((item) => {
            const RN = Math.random();
            return (
              <li key={RN}>
                <label htmlFor={item}>{item}</label>
                <input
                  id={item}
                  onBlur={(e) =>
                    enterData({
                      value: e.target.value,
                      typeOfInput: item,
                      typeOfData: "formData",
                    })
                  }
                  className={classes.input}
                />
              </li>
            );
          })}
        </ul>
      </form>
    );
  }, [state]);
};
export default Form;
