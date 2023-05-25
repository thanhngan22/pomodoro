// hooks
import { useState, useEffect } from "react";

// svg and icons
import threeDotsIcon from "../assets/icons/3dots.png";
import plusIcon from "../assets/icons/plus.png";
import threeDotsBlackIcon from "../assets/icons/3dots.black.png";

// interfaces and classes
import { CUserSetting, CMode, IMode } from "../interface";

export default function Pomofocus() {
  let timeStart = "25:00";

  const User = new CUserSetting();
  // console.log("User setting: ", JSON.stringify(User, null, 2))
  const mode = new CMode();

  useEffect(() => {
    mode.setMode("pomodoro");
  }, []);

  function handleOnclickTypesPomo(modeName: string) {
    mode.setMode(modeName);
    return undefined;
  }

  function changeTextStartBtn() {
    const startBtn = document.querySelector(".start__button");
    if (!startBtn) return;
    if (startBtn.innerHTML === "START") {
      startBtn.innerHTML = "PAUSE";
    } else {
      startBtn.innerHTML = "START";
    }
  }

  return (
    <div className=" pomo__container flex flex-col pt-10 px-20 text-white ">
      <div className="display__timer px-20 items-center flex flex-col">
        <div className="pomo__break-types pt-4">
          <button
            onClick={() => handleOnclickTypesPomo("pomodoro")}
            className="pomodoro__main-btn pomo__types-btn -ml-3 "
          >
            Pomodoro
          </button>
          <button
            onClick={() => handleOnclickTypesPomo("short-break")}
            className="Short__Break-btn pomo__types-btn "
          >
            Short Break
          </button>
          <button
            onClick={() => handleOnclickTypesPomo("long-break")}
            className="Long__Break-btn pomo__types-btn -mr-3"
          >
            Long Break
          </button>
        </div>
        <div className="time__remaining py-8 text-8xl">{timeStart}</div>
        <div className="start__button-container mb-8 ">
          <button
            onClick={() => changeTextStartBtn()}
            className="start__button"
          >
            START
          </button>
          <button className="next__mode-btn"></button>
        </div>
      </div>
      <div className="target__heading text-center py-4">
        <div className="current__task opacity-70 text-l">#1</div>
        <h1 className="target__heading-title">Time to focus !</h1>
      </div>
      <div className="tasks__menu flex justify-between pb-5 border-b border-gray-300">
        <h2 className="font-medium text-xl">Tasks</h2>
        <button className="tasks__menu-action px-3 py-3 ">
          <img src={threeDotsIcon} alt="thee-dots-icon" className="w-4 h-4" />
        </button>
      </div>
      <div className="tasks__list my-5">
        <div className="task__item flex justify-between">
          <div className="checkIcon__container"></div>
          <div className="task__content"></div>
          <div className="task__config">
            <span className="task__count"></span>
            <button className="border rounded px-1.5 py-1.5   ">
              <img
                src={threeDotsBlackIcon}
                alt="thee-dots-black-icon"
                className="w-4 h-4 opacity-40 task__config-icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="add__task  ">
        <button className="add__task-btn flex justify-center font-semibold m-auto w-full h-16 opacity-80">
          <img
            src={plusIcon}
            alt="plus-icon"
            className="self-center w-4 h-4 mr-2  "
          />
          <span className="self-center">Add Task</span>
        </button>
      </div>
      <div className="more__inf text-center">
        Pomos: <span></span>
        Finish At: <span></span>
      </div>
    </div>
  );
}
