export interface IBaseContentStruct {
    // nothing
}

export interface ITypePara extends IBaseContentStruct {
    para: string;
}

export interface ITypeListNum extends IBaseContentStruct {
    list: string[];
}

export interface IItemBullet {
    heading : string;
    description: string;
}

export interface ITypeListBullet extends IBaseContentStruct {
    list: IItemBullet[];
}

export interface IItemBulletWithLink extends IItemBullet {
    url: string;

}

export interface ITypeListBulletWithLink extends IBaseContentStruct {
    list: IItemBulletWithLink[];
}

export interface IBaseItem {
    subTittle: string;
    content_type: string;
    content: IBaseContentStruct;
}

export interface IItemFull extends IBaseItem {
    highLightWords : string[];
    highLightWordsLink : string[];

}
