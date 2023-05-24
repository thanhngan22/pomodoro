export interface IPrivacyItem {
    heading: string;
    type: string;
    para?: string;
    paras?: string[];
    subheading?: string;
    children?: IPrivacyItem[];
    list?: string[];
    mail?: string;
    subTittles?: string[];
    subParas?: string[];
    subList?: {
        subTittles: string[];
        subParas: string[];
    }

}




