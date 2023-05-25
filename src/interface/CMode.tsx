export interface IMode {
  mode: string;
  time: number;
  timePomo: number;
  timeShortBreak: number;
  timeLongBreak: number;

  bgcolor: string;
  bgcolorPomo: string;
  bgcolorShortBreak: string;
  bgcolorLongBreak: string;
}

export interface IPropMode {}

export class CMode implements IMode {
  mode: string;
  time: number;
  bgcolor: string;

  // default settings
  timePomo: number = 25;
  timeShortBreak: number = 5;
  timeLongBreak: number = 15;

  bgcolorPomo: string = "#BA4949";
  bgcolorShortBreak: string = "#38858A";
  bgcolorLongBreak: string = "#397097";

  constructor() {
    this.mode = "pomodoro";
    this.time = 25;
    this.bgcolor = "#BA4949";
  }

  // methods
  getTimeStart() {
    return this.time.toString().padStart(2, "0") + ":00";
  }

  setMode(mode: string) {
    console.log("setMode", mode);
    this.mode = mode;

    // highlight button
    const pomodoroBtn = document.querySelector(".pomodoro__main-btn");
    const shortBreakBtn = document.querySelector(".Short__Break-btn");
    const longBreakBtn = document.querySelector(".Long__Break-btn");

    switch (mode) {
      case "pomodoro":
        this.bgcolor = this.bgcolorPomo;
        this.time = this.timePomo;
        if (pomodoroBtn) {
          pomodoroBtn.classList.add("__active");
        }
        // remove active class from other buttons
        shortBreakBtn?.classList.remove("__active");
        longBreakBtn?.classList.remove("__active");
        break;
      case "short-break":
        this.bgcolor = this.bgcolorShortBreak;
        this.time = this.timeShortBreak;
        if (shortBreakBtn) {
          shortBreakBtn.classList.add("__active");
        }
        // remove active class from other buttons
        pomodoroBtn?.classList.remove("__active");
        longBreakBtn?.classList.remove("__active");
        break;

      case "long-break":
        this.bgcolor = this.bgcolorLongBreak;
        this.time = this.timeLongBreak;
        if (longBreakBtn) {
          longBreakBtn.classList.add("__active");
        }
        // remove active class from other buttons
        pomodoroBtn?.classList.remove("__active");
        shortBreakBtn?.classList.remove("__active");
        break;
      default:
        break;
    }

    // turn on mode
    const app = document.querySelector(".main__app");
    if (app) {
      app.setAttribute("style", `background-color: ${this.bgcolor}`);
      // add transition

      const startBtn = document.querySelector(".start__button");
      if (startBtn) {
        startBtn.setAttribute("style", `color: ${this.bgcolor}`);
      }

      // reset time remaining
      const timeRemaining = document.querySelector(".time__remaining");
      if (timeRemaining) {
        timeRemaining.innerHTML = this.getTimeStart();
      }
    }
  }
}
