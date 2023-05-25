export interface ISoundProps {
    // attributes
    name: string;
    path: string;
}

export interface ISound {
    // attributes
    alarmSounds : ISoundProps[];
    tickingSounds : ISoundProps[];

    alarmVolume : number;
    alarmRepeat : number;
    tickingVolume : number;

    currentAlarmSound : string;
    currentTickingSound : string;
}
