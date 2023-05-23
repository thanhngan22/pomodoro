export interface IColor {
    // attributes
    colors : string[];
    currentColorPomo : string;
    currentColorShortBreak : string;
    currentColorLongBreak : string;

    // methods
    // setters
    setCurrentColorPomo(color : string) : void;
    setCurrentColorShortBreak(color : string) : void;
    setCurrentColorLongBreak(color : string) : void;

    // getters
    getListColors() : string[];
    getCurrentColorPomo() : string;
    getCurrentColorShortBreak() : string;
    getCurrentColorLongBreak() : string;

}