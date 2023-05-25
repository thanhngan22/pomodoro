export interface IMode {
    mode: string;
    time: number;
    color: string;
  }

export class CMode implements IMode {
    mode: string;
    time: number;
    color: string;

    constructor() {
      this.mode = 'pomodoro';
      this.time = 25;
      this.color = '#f87070';
    }

    // methods
    getTimeStart() {
      return this.time + ':00';
    }

    setMode(mode: string, bgcolor: string, time: number) {
      this.mode = mode;
      this.color = bgcolor;
      this.time = time;

      // turn on mode 
      const app = document.getElementById('app');
      if (app) {
        app.style.backgroundColor = this.color;
      }
      this.getTimeStart();

      // highlight button
      const pomodoroBtn = document.querySelector('.pomodoro__main-btn');
      const shortBreakBtn = document.querySelector('.Short__Break-btn');
      const longBreakBtn = document.querySelector('.Long__Break-btn');

      switch (mode)  {
        case 'pomodoro':
          if (pomodoroBtn) {
            pomodoroBtn.classList.add('__active')
          }
          // remove active class from other buttons
          shortBreakBtn?.classList.remove('__active');
          longBreakBtn?.classList.remove('__active');
          break;
        case 'short-break':
          if (shortBreakBtn) {
            shortBreakBtn.classList.add('__active')
          }
          // remove active class from other buttons
          pomodoroBtn?.classList.remove('__active');
          longBreakBtn?.classList.remove('__active');
          break;

        case 'long-break':
          if (longBreakBtn) {
            longBreakBtn.classList.add('__active')
          }
          // remove active class from other buttons
          pomodoroBtn?.classList.remove('__active');
          shortBreakBtn?.classList.remove('__active');
          break;
      }
    }


  }