import {  IPrivacyItem } from "./index";
import { CPrivacyItem } from "./index";


export class CPrivacyItems  {
    posts: CPrivacyItem[];

    constructor(props: IPrivacyItem[]) {
        this.posts = props.map((item: IPrivacyItem) => new CPrivacyItem(item));

    }

    getJSX(): JSX.Element[] {
        const jsx = this.posts.map((item, index) => {
            return (
                <div>
                    {item.getInnerHTML()}
                </div>
            )
        })
        return jsx;
    }
}