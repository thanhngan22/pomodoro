import {  IPrivacyItem } from "./index";
import { CPrivacyItem } from "./index";


export class CPrivacyItems  {
    posts: CPrivacyItem[];

    constructor(props: IPrivacyItem[]) {
        this.posts = props.map((item: IPrivacyItem) => new CPrivacyItem(item));

    }

    getJSX(): JSX.Element[] {
        const jsx = this.posts.map((item, index) => {
            const className = item.post.heading.split(" ").join("_");
            return (
                <div key={index} className={className}>
                    {item.getInnerHTML()}
                </div>
            )
        })
        return jsx;
    }
}