import threeDotsBlackIcon from "../../assets/icons/3dots.black.png";
import BoxUpdateTask from "./boxUpdateTask";
import { CTask, CUserSetting } from "../../interface";

// hooks
import { useEffect } from "react";

interface IProp {
  task: CTask;
  user: CUserSetting;
  onUserChange?: (newUser: CUserSetting) => void;
}

const BoxTaskMini: React.FC<IProp> = ({ task, user, onUserChange }) => {
  const status = task.status === "finished" ? "finished__task" : "";
  const checked = task.status === "finished" ? "checked" : "";

  const cloneUser = new CUserSetting(user);

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

    // console.log("list :: ", user.todolist.list)
    // console.log("task id: ", task.getId())

    if (inputTaskNameElement.classList.contains("finished__task")) {
      cloneUser.todolist.list[task.getId() - 1].setStatus("unfinished");

      inputTaskNameElement.classList.remove("finished__task");
      checkIcon.classList.remove("checked");
    } else {
      cloneUser.todolist.list[task.getId() - 1].setStatus("finished");
      inputTaskNameElement.classList.add("finished__task");
      checkIcon.classList.add("checked");
    }

    onUserChange && onUserChange(cloneUser);
  }

  function showBoxEditTask() {
    // console.log("show box edit task")
    const className = ".box-task__item--" + task.id;
    const parentElement = document.querySelector(className);
    if (!parentElement) return;

    // if has notes, show notes and hidden btn add notes
    const notesElement = parentElement.querySelector(".notes__content");
    if (!notesElement) return;
    const addNotesBtn = parentElement.querySelector(".update__more--btn");
    if (!addNotesBtn) return;

    if (task.getNote() !== "") {
      notesElement.classList.remove("hidden");
      addNotesBtn.classList.add("hidden");
    } else {
      notesElement.classList.add("hidden");
      addNotesBtn.classList.remove("hidden");
    }

    // from parent element, find box update task element
    const boxEditTask = parentElement.querySelector(".box__edit-specific-task");
    if (!boxEditTask) return;

    // console.log("box edit task: ", boxEditTask)

    if (boxEditTask.classList.contains("hidden")) {
      // console.log("remove hidden")
      // hidden box task item
      const taskItemMain = parentElement.querySelector(".task__item-wrapper");
      if (taskItemMain) {
        taskItemMain.classList.add("hidden");

        // remove padding
        taskItemMain.setAttribute("style", "padding: 0px;");
      }

      boxEditTask.classList.remove("hidden");
    }
  }

  useEffect(() => {
    const className = ".box-task__item--" + task.id;
    const parentElement = document.querySelector(className);
    if (!parentElement) return;
    const element = parentElement.querySelector(".task__note");
    if (!element) return;
    if (task.getNote() === "") {
      element.classList.add("hidden");
      return;
    }
    element.classList.remove("hidden");
  }, [task.getNote()]);

  function setCurrentTittle() {
    const currentTaskID = document.querySelector(".current__task");
    const currentTaskTittle = document.querySelector(".target__heading-tittle");
    // console.log("current task id: ", currentTaskID)
    // console.log("current task tittle: ", currentTaskTittle)
    if (!currentTaskID || !currentTaskTittle) return;

    // update inner text
    currentTaskID.innerHTML = "#" +  task.getId().toString();
    currentTaskTittle.innerHTML = task.getName();
  }

  return (
    <div className="task__item ">
      <div className="task__item-wrapper cursor-pointer "
      onClick={() => setCurrentTittle()}
      >
        <div className="task__item-main flex justify-between">
          <button
            className="checkIcon__wrapper"
            onClick={() => markFinishedTask()}
          >
            <div className={`checkIcon__container ${checked} `}></div>
          </button>
          <div className="task__content w-5/6  flex items-center ">
            <span
              className={`task__name text-black px-2 font-semibold opacity-85 ${status}`}
            >
              {task.getName()}
            </span>
          </div>
          <div className="task__config flex justify-between items-center">
            <div className="task__count text-gray-700 opacity-80  ">
              <span className="num__task-done font-semibold">
                {task.getNumTasksDone()}
              </span>
              <span className="text-xs font-semibold divide-items">/</span>
              <span className="task-quantity font-semibold opacity-80  ">
                {task.getQuantity()}
              </span>
            </div>
            <button
              className="border rounded px-1.5 py-1.5 w-8 h-8  "
              onClick={() => showBoxEditTask()}
            >
              <img
                src={threeDotsBlackIcon}
                alt="thee-dots-black-icon"
                className="w-4 h-4 opacity-40 task__config-icon"
              />
            </button>
          </div>
        </div>
        <div className="task__note bg-yellow-100 py-2 ml-5 mt-2 rounded px-3 hidden">
          <span
            className="task__note-content text-red-400 text-sm 
          "
          >
            {task.getNote()}
          </span>
        </div>
      </div>
      <div className="hidden box__edit-specific-task">
        <BoxUpdateTask task={task} user={user} onUserChange={onUserChange} />
      </div>
    </div>
  );
};

export default BoxTaskMini;
