export interface ISound {
    // attributes
    alarmSound : string[];
    tickingSound : string[];

    alarmVolume : number;
    alarmReapeat : number;
    tickingVolume : number;

    currentAlarmSound : string;
    currentTickingSound : string;

    // methods
    // setters
    setCurrentAlarmSound(sound : string) : void;
    setCurrentTickingSound(sound : string) : void;
    setAlarmVolume(volume : number) : void;
    setAlarmRepeat(repeat : number) : void;
    setTickingVolume(volume : number) : void;

    // getters
    getListSounds() : string[];
    getListTickingSounds() : string[];

    getCurrentAlarmSound() : string;
    getCurrentTickingSound() : string;
    getAlarmVolume() : number;
    getAlarmRepeat() : number;
    getTickingVolume() : number;

}