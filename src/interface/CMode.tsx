export interface IMode {
  modeName: string;
  currentMins: number;
  currrentSecs: number;

  timePomo: number;
  timeShortBreak: number;
  timeLongBreak: number;

  bgcolor: string;
  bgcolorPomo: string;
  bgcolorShortBreak: string;
  bgcolorLongBreak: string;
}

export class CMode implements IMode {
  modeName: string;
  bgcolor: string;

  // default settings
  currentMins: number;
  currrentSecs: number;

  timePomo: number = 25;
  timeShortBreak: number = 5;
  timeLongBreak: number = 15;

  bgcolorPomo: string = "#BA4949";
  bgcolorShortBreak: string = "#38858A";
  bgcolorLongBreak: string = "#397097";

  constructor(other?: CMode) {
    if (other) {
      this.modeName = other.modeName;
      this.currentMins = other.currentMins;
      this.currrentSecs = other.currrentSecs;
      this.bgcolor = other.bgcolor;
      return;
    }
    this.modeName = "pomodoro";
    this.currentMins = 25;
    this.currrentSecs = 0;
    this.bgcolor = "#BA4949";
  }

  // methods
  getTimeStart() {
    return (
      this.currentMins.toString().padStart(2, "0") +
      ":" +
      this.currrentSecs.toString().padStart(2, "0")
    );
  }

  setMode(modeName: string) {
    console.log("setmode", modeName);
    this.modeName = modeName;

    // highlight button
    const pomodoroBtn = document.querySelector(".pomodoro__main-btn");
    const shortBreakBtn = document.querySelector(".Short__Break-btn");
    const longBreakBtn = document.querySelector(".Long__Break-btn");

    switch (modeName) {
      case "pomodoro":
        this.bgcolor = this.bgcolorPomo;
        this.currentMins = this.timePomo;
        this.currrentSecs = 0;
        if (pomodoroBtn) {
          pomodoroBtn.classList.add("__active");
        }
        // remove active class from other buttons
        shortBreakBtn?.classList.remove("__active");
        longBreakBtn?.classList.remove("__active");
        break;
      case "short-break":
        this.bgcolor = this.bgcolorShortBreak;
        this.currentMins = this.timeShortBreak;
        this.currrentSecs = 0;
        if (shortBreakBtn) {
          shortBreakBtn.classList.add("__active");
        }
        // remove active class from other buttons
        pomodoroBtn?.classList.remove("__active");
        longBreakBtn?.classList.remove("__active");
        break;

      case "long-break":
        this.bgcolor = this.bgcolorLongBreak;
        this.currentMins = this.timeLongBreak;
        this.currrentSecs = 0;
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

    // turn on modeName
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

  getMode(): string {
    return this.modeName;
  }

  getTimeMins(): number {
    return this.currentMins;
  }

  getTimeSecs(): number {
    return this.currrentSecs;
  }
}
