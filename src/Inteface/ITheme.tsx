import { IColor } from "./IColor";
import { IHourFormat } from "./IHourFormat";

export default interface ITheme {
    // attributes
    color : IColor;
    hourFormat: IHourFormat;
    darkMode : boolean;
    smallWindow : boolean;

    // methods
    // setters

}