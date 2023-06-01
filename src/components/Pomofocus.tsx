// hooks
import { useState, useEffect, useRef } from "react";

// svg and icons
import threeDotsIcon from "../assets/icons/3dots.png";
import plusIcon from "../assets/icons/plus.png";
import nextModeIcon from "../assets/icons/next-mode.png";

// interfaces and classes
import { CUserSetting, CTask } from "../interface";

// components
import ShowListTasks from "./modules/showListTasks";
import BoxUpdateTask from "./modules/boxUpdateTask";

// get data from local storage
const data = localStorage.getItem("userData");
// console.log("data from local storage: ", data);

let userData: CUserSetting = data
  ? new CUserSetting(JSON.parse(data))
  : new CUserSetting();

const Pomofocus: React.FC = () => {
  const [User, setUser] = useState<CUserSetting>(userData);
  const [mins, setMins] = useState<number>(User.mode.getTimeMins());
  const [secs, setSecs] = useState<number>(User.mode.getTimeSecs());
  const [pause, setPause] = useState<boolean>(true);

  const [numTaskDone, setNumTasksDone] = useState<number>(User.todolist.getTotalNumTasksDone());
  const [numTasks, setNumTasks] = useState<number>(User.todolist.getNumTaskUnFinish());
  const [timeFinish, setTimeFinish] = useState<string>(User.getTimeFinish());
  const [totalTime, setTotalTime] = useState<number>(Math.round(User.getTimeTodo()/60 *10)/10);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  // time format to display
  const timeShow =
    mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");

  // when add new task in child component
  function handleOnChangeUser(newUser: CUserSetting) {
    // console.log("handle on change user ...");
    setUser(newUser);
  }

  // reset bar from start
  function resetProgressBar() {
    // reset progress bar
    const timeCountDown = User.mode.getTimeMins() * 60;
    // const timeCountDown = 5;

    // console.log("timeCountDown: ", timeCountDown);
    // set animation progress bar duration
    const progress_bar = document.getElementById("progress__bar");
    if (!progress_bar) return;

    progress_bar.style.animation = "none";
    void progress_bar.offsetWidth;
    progress_bar.style.width = "0px";
    progress_bar.style.animation = "progress";
    progress_bar.style.animationPlayState = "paused";
    progress_bar.style.animationTimingFunction = "linear";
    progress_bar.style.animationDuration = `${timeCountDown}s`;
    progress_bar.style.animationFillMode = "forwards";
  }

  // delay countdown when click change mode or next btn\
  function delayCountDown() {
    // set pause
    setPause(true);

    // change inner html of start btn if current is pause
    const startBtn = document.querySelector(".start__button");
    if (startBtn) {
      if (startBtn.innerHTML === "PAUSE") {
        startBtn.innerHTML = "START";
      }
    }
  }

  // handle event switch mode when click next mode button
  const switchNextMode = () => {
    // set pause
    delayCountDown();

    const mode = User.mode.getMode();
    // if pomodoro mode : check if countInterval == longBreakInterval:
    //                    switch to long break mode and set countInterval = 0
    //                    else switch to short break mode
    // if short break mode: switch to pomodoro mode
    // if long break mode: switch to pomodoro mode
    if (mode === "pomodoro") {
      if (User.getCountInterval() === User.getLongBreakInterval()) {
        User.mode.setMode("long-break");
        User.setCountInterval(0);
      } else {
        User.mode.setMode("short-break");
      }
    } else {
      User.mode.setMode("pomodoro");
    }
    setMins(User.mode.getTimeMins());
    setSecs(User.mode.getTimeSecs());
    resetProgressBar();
  };

  // set mode after first render
  useEffect(() => {
    User.mode.setMode(User.mode.getMode());
    // reset progress bar
    resetProgressBar();
  }, []);

  useEffect(() => {
    console.log("render cause user change ...");
    setNumTasks(User.todolist.getNumTaskUnFinish());
    setNumTasksDone(User.todolist.getTotalNumTasksDone());
    setTimeFinish(User.getTimeFinish());
    setTotalTime(Math.round(User.getTimeTodo()/60 *10)/10);

    // write to local storage
    localStorage.setItem("userData", JSON.stringify(User, null, 2));
    // console.log("update user data to local storage ...")
  }, [User]);

  useEffect(() => {
    // start count down
    let timeRemaining = mins * 60 + secs;

    if (pause || timeRemaining <= 0) {
      clearInterval(intervalId.current as NodeJS.Timeout);
      return;
    }
    intervalId.current = setInterval(() => {
      timeRemaining--;
      setMins(Math.floor(timeRemaining / 60));
      setSecs(timeRemaining % 60);

      if (timeRemaining <= 0) {
        clearInterval(intervalId.current as NodeJS.Timeout);
        setPause(true);
        const progress_bar = document.getElementById("progress__bar");
        if (!progress_bar) return;
        progress_bar.style.animationPlayState = "paused";

        // increase number of pomodoro interval and update to local storage
        User.setCountInterval(User.getCountInterval() + 1);
        localStorage.setItem("userData", JSON.stringify(User, null, 2));
        switchNextMode();
      }
    }, 1000);
  }, [pause]);

  // handle event switch mode [pomodoro, short-break, long-break]
  function handleOnclickTypesPomo(modeName: string) {
    // set pause
    delayCountDown();

    User.mode.setMode(modeName);
    setMins(User.mode.getTimeMins());
    setSecs(User.mode.getTimeSecs());
    localStorage.setItem("userData", JSON.stringify(User, null, 2));

    // reset progress bar
    resetProgressBar();

    return undefined;
  }

  // handle event click button start
  function handleClickStartBtn() {
    const startBtn = document.querySelector(".start__button");
    const progress_bar = document.getElementById("progress__bar");
    if (!startBtn) return;
    if (!progress_bar) return;

    if (startBtn.innerHTML === "START") {
      // start countdown time

      startBtn.classList.add("click__Start");
      startBtn.innerHTML = "PAUSE";
      setPause(false);

      // active animation progress bar

      progress_bar.style.animationPlayState = "running";
    } else {
      // pause countdown time

      startBtn.classList.remove("click__Start");
      startBtn.innerHTML = "START";
      setPause(true);

      // delay animation progress bar
      progress_bar.style.animationPlayState = "paused";
    }
  }

  // handle event click button add task
  function handleOnClickAddTask() {
    const addTaskBox = document.querySelector(".add__task-box");
    if (!addTaskBox) return;

    // hide update num tasks done and split act when add task
    const boxTaskDone = addTaskBox.querySelector(".update__num-tasks-done");
    boxTaskDone?.classList.add("hidden");
    const splitAct = addTaskBox.querySelector(".update__act--split");
    splitAct?.classList.add("hidden");

    addTaskBox.classList.remove("hidden");
    const addTaskBtn = document.querySelector(".add__task-btn");
    if (!addTaskBtn) return;
    addTaskBtn.classList.add("hidden");

    // focus input when show box
    const inputElement = addTaskBox.querySelector(
      ".update__text"
    ) as HTMLInputElement;
    if (!inputElement) return;
    inputElement.focus();
  }

  return (
    <div className=" pomo__container flex flex-col pt-10 px-20 text-white ">
      <div className="display__timer items-center flex flex-col">
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
        <div className="time__remaining px-20 py-8 text-8xl">{timeShow}</div>
        <div className="start__button-container mb-8 flex items-center ml-28  ">
          <div className="">
            <button
              onClick={() => handleClickStartBtn()}
              className="start__button "
            >
              START
            </button>
          </div>
          <div className="w-20"></div>
          <div className=" ">
            <button
              className="next__mode-btn  w-8 h-8"
              onClick={() => switchNextMode()}
            >
              <div className="next-mode__icon--wrapper">
                <img
                  src={nextModeIcon}
                  alt="next-mode-icon"
                  className="w-6 h-6"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="target__heading text-center py-4">
        <div className="current__task opacity-70 text-l">#1</div>
        <h1 className="target__heading-tittle"> Time to focus ! </h1>
      </div>
      <div className="tasks__menu flex justify-between pb-5 border-b border-gray-300">
        <h2 className="font-medium text-xl">Tasks</h2>
        <button className="tasks__menu-action px-3 py-3 ">
          <img src={threeDotsIcon} alt="thee-dots-icon" className="w-4 h-4" />
        </button>
      </div>
      <div className="tasks__list my-5">
        <ShowListTasks user={User} onUserChange={handleOnChangeUser} />
      </div>
      <div className="add__task  ">
        <div className="add__task-box hidden">
          <BoxUpdateTask
            task={new CTask()}
            user={User}
            onUserChange={handleOnChangeUser}
          />
        </div>
        <button
          className="add__task-btn flex justify-center font-semibold m-auto w-full h-16 opacity-80"
          onClick={() => handleOnClickAddTask()}
        >
          <img
            src={plusIcon}
            alt="plus-icon"
            className="self-center w-4 h-4 mr-2  "
          />
          <span className="self-center">Add Task</span>
        </button>
      </div>
      <div className="more__inf text-center flex  justify-center font-semibold">
        <p className="pomos pl-1 pr-10">
          <span> {"Pomos: "} { numTaskDone}</span>
          <span className="text-xs divide-items">/</span>
          <span>{numTasks}</span>
        </p>
        <p className="finishAt">
       <span className="">{" Finish at: "}{timeFinish}</span>
       <span className="text-xs font-normal pl-1">{`(${totalTime} h) `}</span>
        </p>
      </div>
    </div>
  );
};

export default Pomofocus;
