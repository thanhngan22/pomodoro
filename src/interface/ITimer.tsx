export  interface ITimer {
    // attributes
    timePomo : number;
    timeShortBreak : number;
    timeLongBreak : number;

    autoStartBreaks : boolean;
    autoStartPomos : boolean;

    longBreakInterval: number;
    
}