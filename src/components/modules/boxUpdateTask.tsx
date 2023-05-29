import { CTask, CUserSetting } from "../../interface";

import { useState, useEffect } from "react";

import UpIcon from "../../assets/icons/caret-up.png";
import DownIcon from "../../assets/icons/caret-down.png";

interface IProp {
  task: CTask;
  user: CUserSetting;
  onUserChange?: (newUser: CUserSetting) => void;
}

const BoxUpdateTask: React.FC<IProp> = ({ task, user, onUserChange }) => {
  const [nameTask, setNameTask] = useState<string>(task.getName() || "");
  const [quantity, setQuantity] = useState<number>(task.getQuantity() || 1);
  const [note, setNote] = useState<string>(task.getNote() || "");
  const [numTasksDone, setNumTasksDone] = useState<number>(
    task.getNumTasksDone() || 0
  );

  const [quantityStr, setQuantityStr] = useState<string>(quantity.toString());
  const [numTasksDoneStr, setNumTasksDoneStr] = useState<string>(
    task.getNumTasksDone().toString() || "0"
  );
  // console.log("user passed to box update task: ", user);
  const cloneUser = new CUserSetting(user);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameTask(e.target.value);
  }

  function handleOnClickBtn(method: string) {
    console.log("method onclick : ", method);

    // if name task is empty, do nothing
    if (nameTask === "") return;

    const addTaskBox = document.querySelector(".add__task-box");
    const addTaskBtn = document.querySelector(".add__task-btn");
    if (!addTaskBox || !addTaskBtn) return;

    switch (method) {
      case "cancel":
        console.log("cancel task");
        break;

      case "delete":
        console.log("delete task");
        cloneUser.todolist.delete(task.getId() || -1);
        break;

      case "update":
        console.log("update task");

        // case add task
        if (addTaskBtn.classList.contains("hidden")) {
          const temp = new CTask();

          // config task
          temp.setName(nameTask);
          temp.setQuantity(quantity);
          temp.setNumTasksDone(numTasksDone);
          temp.setNote(note);

          cloneUser.todolist.push(temp);
        } else {
          // update task
          task.setName(nameTask);
          task.setQuantity(quantity);
          task.setNumTasksDone(numTasksDone);
          task.setNote(note);

          cloneUser.todolist.update(task);
        }
        break;

      default:
        break;
    }

    // show addTaskBtn and hide box update task when click save button
    addTaskBox?.classList.add("hidden");
    if (addTaskBtn?.classList.contains("hidden")) {
      addTaskBtn?.classList.remove("hidden");

      // reset value of input
      setNameTask("");
    }
    onUserChange && onUserChange(cloneUser);
  }

  // handle onChange numTasksDone
  function handleOnChangeNumTasksDone(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log("e.target.value: ", e.target.value);
    if (e.target.value === "") {
      setNumTasksDoneStr("");
      return;
    }
    parseInt(e.target.value) >= 0
      ? setNumTasksDone(parseInt(e.target.value))
      : setNumTasksDone(0);
    parseInt(e.target.value) >= 0
      ? setNumTasksDoneStr(parseInt(e.target.value).toString())
      : setNumTasksDoneStr("0");

    if (numTasksDone > quantity) {
      setNumTasksDone(quantity);
    }
  }
  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setQuantityStr("");
      return;
    }
    parseInt(e.target.value) >= 1
      ? setQuantity(parseInt(e.target.value))
      : setQuantity(1);
    parseInt(e.target.value) >= 1
      ? setQuantityStr(parseInt(e.target.value).toString())
      : setQuantityStr("1");
  }

  return (
    <div className="wrapper__box-update-task w-full bg-white text-black flex flex-col ">
      <input
        className="update__text  w-full font-semibold text-xl opacity-80 "
        placeholder="What are you working on ?"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={nameTask}
      />
      <div className="update__act w-full">
        <h3 className="update__act--title">Act / Est Pomodoros</h3>
        <div className="update__act--wrapper flex py-4">
          <input
            className="update__act--input update__num-tasks-done"
            type="number"
            placeholder="0"
            value={numTasksDoneStr}
            onChange={(e) => handleOnChangeNumTasksDone(e)}
          />
          <div className="update__act--split mx-2 py-2 text-gray-600 font-semibold">
            /
          </div>
          <input
            className="update__act--input placeholder:text-black placeholder:opacity-80 "
            type="number"
            placeholder="1"
            value={quantityStr}
            onChange={(e) => handleOnChangeQuantity(e)}
          />
          <div className="increase__decrease-btn ml-4 items-center flex">
            <button
              className="update__increase  mr-1"
              onClick={() => {
                setQuantity(quantity + 1);
                setQuantityStr(quantity.toString());
              }}
            >
              <img
                src={UpIcon}
                alt="up-icon"
                className="w-3 h-3 mx-auto opacity-40"
              />
            </button>
            <button
              className="update__decrease"
              onClick={() => {
                quantity - 1 > 0 ? setQuantity(quantity - 1) : setQuantity(1);
                setQuantityStr(quantity.toString());
              }}
            >
              <img
                src={DownIcon}
                alt="down-icon"
                className="w-3 h-3 mx-auto opacity-40"
              />
            </button>
          </div>
        </div>
        <div className="update__more font-semibold text-sm text-gray-700 opacity-80">
          <button className="update__more--btn mr-3 underline">
            + Add Note
          </button>
          <button className="update__more--btn underline">+ Add Project</button>
          <div className="update__more-icon"></div>
        </div>
      </div>
      <ul className="update__footer w-full py-3  flex justify-between font-semibold">
        <li>
          <button
            className="update__delete px-5 py-1 ml-4 rounded text-gray-400"
            onClick={() => handleOnClickBtn("delete")}
          >
            Delete
          </button>
        </li>
        <li className="">
          <button
            className="update__cancel px-4 py-1 rounded text-gray-400"
            onClick={() => handleOnClickBtn("cancel")}
          >
            Cancel
          </button>
          <button
            className="update__save bg-black opacity-75 font-md mx-5 py-1 px-5 text-white rounded"
            onClick={() => handleOnClickBtn("update")}
          >
            Save
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BoxUpdateTask;
