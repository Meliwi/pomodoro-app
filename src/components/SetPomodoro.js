import { useState } from "react";
import Button from "./Button";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    shortBreak: 0.2,
    longBreak: 1,
    activate: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });

        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          shortBreak: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          longBreak: parseInt(value),
        });
        break;
      default:
        break;
    }
    console.log(newTimer);
  };

  const handleSubmit = () => {};

  return (
    <div className="form-container">
      {/* No validate means that input shouldn't be validated when submit*/}
      <form noValidate>
        <div>
          <input
            className="input"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          ></input>
          <input
            className="input"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.shortBreak}
          ></input>
          <input
            className="input"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.longBreak}
          ></input>
        </div>
      </form>
      <Button callBack={handleSubmit}>title="setTimer"</Button>
    </div>
  );
};

export default SetPomodoro;
