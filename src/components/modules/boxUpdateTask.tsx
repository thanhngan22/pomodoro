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
  // console.log("user passed to box update task: ", user);
  const cloneUser = new CUserSetting(user);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameTask(e.target.value);
  }

  function handleOnClickBtn(method: string) {
    console.log("method onclick : ", method);
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
          // add new task
          // console.log("create and add new task");
          const temp = new CTask();
          temp.setName(nameTask);
          cloneUser.todolist.push(temp);
        } else {
          // update task
          task.setName(nameTask);
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
          <input className="update__act--input" type="number" placeholder="0" />
          <div className="update__act--split mx-2 py-2 text-gray-600 font-semibold">
            /
          </div>
          <input
            className="update__act--input placeholder:text-black placeholder:opacity-80 "
            type="number"
            placeholder="1"
          />
          <div className="increase__decrease-btn ml-4 items-center flex">
            <button className="update__increase  mr-1">
              <img
                src={UpIcon}
                alt="up-icon"
                className="w-3 h-3 mx-auto opacity-40"
              />
            </button>
            <button className="update__decrease">
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
