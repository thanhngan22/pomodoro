import { ITimer } from "./ITimer";
import { ISound } from "./ISound";
// import { ITheme } from "./ITheme";
import { IReminder } from "./IReminder";


export interface ISettings { 
    // attributes
    timer : ITimer;
    sound: ISound;
    // theme: ITheme;
    notification: IReminder;
}
