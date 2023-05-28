import { ISettings, ITimer, ISound, ITheme, IReminder, ISoundProps, CListTasks, CMode } from ".";

export class CUserSetting implements ISettings {
  // attributes
  timer: ITimer;
  sound: ISound;
  theme: ITheme;
  notification: IReminder;
  todolist : CListTasks;
  mode: CMode;

  // default constructor
  constructor(other? : CUserSetting) {
    if (other) {
      this.timer = other.timer;
      this.sound = other.sound;
      this.theme = other.theme;
      this.notification = other.notification;
      this.todolist = new CListTasks(other.todolist);
      this.mode = new CMode(other.mode);
      return;
    }

    this.timer = {
      timePomo: 25,
      timeShortBreak: 5,
      timeLongBreak: 15,

      autoStartBreaks: true,
      autoStartPomos: true,

      longBreakInterval: 4,
      countInterval: 0,
    };
    this.theme = {
      color: {
        colors: [
          "#BA4949",
          "#38858A",
          "#397097",
          "#A4893C",
          "#7D53A2",
          "#AF4E91",
          "#518A58",
          "#545764",
        ],
        currentColorPomo: "#BA4949",
        currentColorShortBreak: "#38858A",
        currentColorLongBreak: "#397097",
      },
      hourFormat: {
        formatTypes: ["24h", "12h"],
      },
      darkMode: false,
      smallWindow: false,
    };
    this.notification = {
      types: ["None", "Last", "Every"],
      currentType: "None",
      currentTimeReminder: 0,
    };
    this.sound = {
      alarmSounds: [],
      tickingSounds: [],
      currentAlarmSound: "",
      currentTickingSound: "",
      alarmVolume: 0,
      alarmRepeat: 0,
      tickingVolume: 0,
    };
    this.todolist = new CListTasks();
    this.mode = new CMode();
  }

  //   methods for timer
  //   setters
  setTimePomo(time: number): void {
    this.timer.timePomo = time;
  }

  setTimeShortBreak(time: number): void {
    this.timer.timeShortBreak = time;
  }

  setTimeLongBreak(time: number): void {
    this.timer.timeLongBreak = time;
  }

  setAutoStartBreaks(autoStart: boolean): void {
    this.timer.autoStartBreaks = autoStart;
  }

  setAutoStartPomos(autoStart: boolean): void {
    this.timer.autoStartPomos = autoStart;
  }

  setLongBreakInterval(interval: number): void {
    this.timer.longBreakInterval = interval;
  }

  setCountInterval(count: number): void {
    this.timer.countInterval = count;
  }

  // getters
  getTimePomo(): number {
    return this.timer.timePomo;
  }

  getTimeShortBreak(): number {
    return this.timer.timeShortBreak;
  }

  getTimeLongBreak(): number {
    return this.timer.timeLongBreak;
  }

  isAutoStartBreaks(): boolean {
    return this.timer.autoStartBreaks;
  }

  isAutoStartPomos(): boolean {
    return this.timer.autoStartPomos;
  }

  getLongBreakInterval(): number {
    return this.timer.longBreakInterval;
  }

  getCountInterval(): number {
    return this.timer.countInterval;
  }

  // methods for background color
  // setters
  setCurrentColorPomo(color: string): void {
    this.theme.color.currentColorPomo = color;
  }

  setCurrentColorShortBreak(color: string): void {
    this.theme.color.currentColorShortBreak = color;
  }

  setCurrentColorLongBreak(color: string): void {
    this.theme.color.currentColorLongBreak = color;
  }

  // getters
  getListColors(): string[] {
    return this.theme.color.colors;
  }

  getCurrentColorPomo(): string {
    return this.theme.color.currentColorPomo;
  }

  getCurrentColorShortBreak(): string {
    return this.theme.color.currentColorShortBreak;
  }

  getCurrentColorLongBreak(): string {
    return this.theme.color.currentColorLongBreak;
  }

  // methods for reminder
  // setters
  setCurrentType(type: string): void {
    this.notification.currentType = type;
  }

  setCurrentTimeReminder(time: number): void {
    this.notification.currentTimeReminder = time;
  }

  // getters
  getListTypes(): string[] {
    return this.notification.types;
  }

  getCurrentType(): string {
    return this.notification.currentType;
  }

  getCurrentTimeReminder(): number {
    return this.notification.currentTimeReminder;
  }

  // methods for sound
  // setters
  setListAlarmSounds(props: ISoundProps[]): void {
    this.sound.alarmSounds = props;
  }

  setListTickingSounds(props: ISoundProps[]): void {
    this.sound.tickingSounds = props;
  }

  setCurrentAlarmSoundName(sound: string): void {
    this.sound.currentAlarmSound = sound;
  }

  setCurrentTickingSoundName(sound: string): void {
    this.sound.currentTickingSound = sound;
  }

  setAlarmVolume(volume: number): void {
    this.sound.alarmVolume = volume;
  }

  setAlarmRepeat(repeat: number): void {
    this.sound.alarmRepeat = repeat;
  }

  setTickingVolume(volume: number): void {
    this.sound.tickingVolume = volume;
  }

  // getters
  getListAlarmSoundsName(): string[] {
    let list: string[] = [];
    this.sound.alarmSounds.forEach((element) => {
      list.push(element.name);
    });
    return list;
  }

  getListTickingSoundsName(): string[] {
    let list: string[] = [];
    this.sound.tickingSounds.forEach((element) => {
      list.push(element.name);
    });
    return list;
  }

  getCurrentAlarmSoundName(): string {
    return this.sound.currentAlarmSound;
  }

  getCurrentTickingSoundName(): string {
    return this.sound.currentTickingSound;
  }

  getAlarmVolume(): number {
    return this.sound.alarmVolume;
  }

  getAlarmRepeat(): number {
    return this.sound.alarmRepeat;
  }

  getTickingVolume(): number {
    return this.sound.tickingVolume;
  }

  getCurrentSoundPath(): string {
    // create a map of sound name and path from alarmSounds
    let map: Map<string, string> = new Map();
    this.sound.alarmSounds.forEach((element) => {
        map.set(element.name, element.path);
    });
    return map.get(this.getCurrentAlarmSoundName()) || "";
  }

  getCurrentTickingSoundPath(): string {
    // create a map of sound name and path from tickingSounds
    let map: Map<string, string> = new Map();
    this.sound.tickingSounds.forEach((element) => {
        map.set(element.name, element.path);
    });
    return map.get(this.getCurrentTickingSoundName()) || "";
  }
}
