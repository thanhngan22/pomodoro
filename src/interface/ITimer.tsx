export  interface ITimer {
    // attributes
    timePomo : number;
    timeShortBreak : number;
    timeLongBreak : number;

    autoStartBreaks : boolean;
    autoStartPomos : boolean;

    longBreakInterval: number;

    // methods
    // setters
    setTimePomo(time : number) : void;
    setTimeShortBreak(time : number) : void;
    setTimeLongBreak(time : number) : void;

    setAutoStartBreaks(autoStart : boolean) : void;
    setAutoStartPomos(autoStart : boolean) : void;

    setLongBreakInterval(interval : number) : void;

    // getters
    getTimePomo() : number;
    getTimeShortBreak() : number;
    getTimeLongBreak() : number;

    isAutoStartBreaks() : boolean;
    isAutoStartPomos() : boolean;
    
    getLongBreakInterval() : number;
    
}