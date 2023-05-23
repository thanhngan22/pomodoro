import { IBaseItem } from "./IBlog";
import { CBaseItem} from "./CBaseItem";

export class CItemsDesc {
    // attributes
    list: CBaseItem[];
  
    // constructor
    constructor(data : IBaseItem[] ) {
      console.log("CItemDesc constructor");
      this.list = data.map((item) => {
        return new CBaseItem(item);
      })
    }


  
      // methods
      getJSX() {
        console.log("list before map: ", this.list);
        const listItems = this.list?.map((item) => {
            switch (item.content_type) {
                case "paragraph":
                    // console.log("paragraph: ", item.content.para);
                    return item.getJSXPara();
                case "List-Number":
                    // console.log("listNum: ", item.content.listNum);
                    return item.getJSXListNum();
                case "List-Bullet":
                    // console.log("listBullet: ", item.content.listBullet);
                    return item.getJSXListBullet();
                case "List-Bullet/Link":
                    // console.log("listBulletWithLink: ", item.content.listBulletWithLink);
                    return item.getJSXListBulletWithLink();
                default:
                    return <div>default</div>;
            }
        })
        return listItems;
      }
  
  }