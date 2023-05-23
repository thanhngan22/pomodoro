export interface IReminder {
    // attributes
    types : string[];
    currentType : string;
    currentTimeReminder : number;


    // methods
    // setters
    setCurrentType(type : string) : void;
    setCurrentTimeReminder(time : number) : void;

    // getters
    getListTypes() : string[];
    getCurrentType() : string;
    getCurrentTimeReminder() : number;

}
