import { ITimer, ISound, ITheme, IReminder, ISoundProps, CListTasks } from ".";

export interface ISettings {
  // attributes
  timer: ITimer;
  sound: ISound;
  theme: ITheme;
  notification: IReminder;
  todolist: CListTasks;

  // methods for timer
  // setters
  setTimePomo(time: number): void;
  setTimeShortBreak(time: number): void;
  setTimeLongBreak(time: number): void;

  setAutoStartBreaks(autoStart: boolean): void;
  setAutoStartPomos(autoStart: boolean): void;

  setLongBreakInterval(interval: number): void;

  // getters
  getTimePomo(): number;
  getTimeShortBreak(): number;
  getTimeLongBreak(): number;

  isAutoStartBreaks(): boolean;
  isAutoStartPomos(): boolean;

  getLongBreakInterval(): number;

  // methods for background color
  // setters
  setCurrentColorPomo(color: string): void;
  setCurrentColorShortBreak(color: string): void;
  setCurrentColorLongBreak(color: string): void;

  // getters
  getListColors(): string[];
  getCurrentColorPomo(): string;
  getCurrentColorShortBreak(): string;
  getCurrentColorLongBreak(): string;

  // methods for reminder
  // setters
  setCurrentType(type: string): void;
  setCurrentTimeReminder(time: number): void;

  // getters
  getListTypes(): string[];
  getCurrentType(): string;
  getCurrentTimeReminder(): number;

  // methods for sound
  // setters
  setListAlarmSounds(props: ISoundProps[]): void;
  setListTickingSounds(props: ISoundProps[]): void;

  setCurrentAlarmSoundName(sound: string): void;
  setCurrentTickingSoundName(sound: string): void;
  setAlarmVolume(volume: number): void;
  setAlarmRepeat(repeat: number): void;
  setTickingVolume(volume: number): void;

  // getters
  getListAlarmSoundsName(): string[];
  getListTickingSoundsName(): string[];

  getCurrentAlarmSoundName(): string;
  getCurrentTickingSoundName(): string;
  getAlarmVolume(): number;
  getAlarmRepeat(): number;
  getTickingVolume(): number;

  getCurrentSoundPath(): string;
  getCurrentTickingSoundPath(): string;
}
