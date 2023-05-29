import threeDotsBlackIcon from "../../assets/icons/3dots.black.png";
import BoxUpdateTask from "./boxUpdateTask";
import { CTask, CUserSetting } from "../../interface";


// hooks
import {useState} from "react";

interface IProp {
  task: CTask;
  user: CUserSetting;
}

const BoxTaskMini: React.FC<IProp> = ({ task, user}) => {

  const status = task.status === "finished" ? "finished__task" : "";
  const checked = task.status === "finished" ? "checked" : "";

  function markFinishedTask() {
    const className = ".box-task__item--" + task.id;
    const parentElement = document.querySelector(className);
    if (!parentElement) return;

    // from parent element, find check icon
    const checkIcon = parentElement.querySelector(".checkIcon__container");
    if (!checkIcon) return;

    // change css of text input
    const inputTaskNameElement = parentElement.querySelector(".task__name");
    if (!inputTaskNameElement) return;

    console.log("list :: ", user.todolist.list)
    console.log("task id: ", task.getId())


    if (inputTaskNameElement.classList.contains("finished__task")) {
      user.todolist.list[task.getId() - 1].setStatus("unfinished");

      inputTaskNameElement.classList.remove("finished__task");
      checkIcon.classList.remove("checked");
    } else {
      user.todolist.list[task.getId() - 1].setStatus("finished");
      inputTaskNameElement.classList.add("finished__task");
      checkIcon.classList.add("checked");
    }

    // update local storage
    localStorage.setItem("userData", JSON.stringify(user));

  }

  return (
    <div className="task__item ">
      <div className="task__item-wrapper">
        <div className="task__item-main flex justify-between">
          <button
            className="checkIcon__wrapper"
            onClick={() => markFinishedTask()}
          >
            <div className={`checkIcon__container ${checked} `}></div>
          </button>
          <div className="task__content w-5/6  flex items-center ">
            <span className={`task__name text-black px-2 text-center font-semibold opacity-85 ${status}`}>
              {task.getName()}
            </span>
          </div>
          <div className="task__config flex justify-between">
            <div className="task__count text-gray-700 opacity-80  ">
            <span className="num__task-done font-semibold">
              {task.getNumTasksDone()}
            </span>
            <span className="text-xs font-semibold divide-items">/</span>
            <span className="task-quantity font-semibold opacity-80  ">
            {task.getQuantity()}
            </span>
            </div>
            <button className="border rounded px-1.5 py-1.5   ">
              <img
                src={threeDotsBlackIcon}
                alt="thee-dots-black-icon"
                className="w-4 h-4 opacity-40 task__config-icon"
              />
            </button>
          </div>
        </div>
        <div className="task__note bg-yellow-100 py-3 ml-5 mt-3 hidden "></div>
      </div>
      <div className="hidden">
        <BoxUpdateTask task={task} user={user} />
      </div>
    </div>
  );
};

export default BoxTaskMini;
