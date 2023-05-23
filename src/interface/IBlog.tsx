export interface IItemBullet {
  heading: string;
  description: string;
}

export interface IItemBulletWithLink extends IItemBullet {
  url: string;
}

export interface IProps {
    para?: string;
    listNum?: IItemBullet[];
    listBullet?: IItemBullet[];
    listBulletWithLink?: IItemBulletWithLink[];
}

export interface IBaseItem {
  id?: number;
  subTittle: string;
  content_type: string;
  content: IProps;
  highLightWords?: string[];
  highLightWordsLink?: string[];
  
}



