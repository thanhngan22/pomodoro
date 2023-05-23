import { IProps, IBaseItem } from "./IBlog";

export class CBaseItem implements IBaseItem {
  static instanceCount = 0;

  // attributes
  id: number;
  subTittle: string;
  content_type: string;
  content: IProps = {};

  // constructor
  constructor(data: any) {
    CBaseItem.instanceCount++;
    console.log("CBaseItem constructor");

    this.id = CBaseItem.instanceCount;
    this.subTittle = data.subTittle;
    this.content_type = data.content_type;
    
    switch (this.content_type) {
        case "paragraph":
            this.content.para = data.content;
            break;
        case "List-Number":
            this.content.listNum = data.content;
            break;
        case "List-Bullet":
            this.content.listBullet = data.content;
            break;
        case "List-Bullet/Link":
            this.content.listBulletWithLink = data.content;
            break;
        default:
            break;

    }

    // console.log("id: ", this.id);
    // console.log("subTittle: ", this.subTittle);
    // console.log("content_type: ", this.content_type);
    // console.log("content: ", this.content);
  }

  getJSXPara() {
    return (
      <div className="desc__item" key={this.id}>
        <h2 className="desc__item-subTittle">{this.subTittle}</h2>
        <p className="desc__item-para">{this.content.para}</p>
      </div>
    );
  }

  getJSXListNum() {
    const listItems = this.content.listNum?.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div className="desc__item" key={this.id}>
        <h2 className="desc__item-subTittle">{this.subTittle}</h2>
        <p className="desc__item-listNum">{listItems}</p>
      </div>
    );
  }

  getJSXListBullet() {
    const listItems = this.content.listBullet?.map((item, index) => {
      return (
        <li key={index}>
          <h3>{item.heading}</h3>
          <span>{item.description}</span>
        </li>
      );
    });
    return (
      <div className="desc__item" key={this.id}>
        <h2 className="desc__item-subTittle">{this.subTittle}</h2>
        <div className="desc__item-listBullet">{listItems}</div>
      </div>
    );
  }

  getJSXListBulletWithLink() {
    const listItems = this.content.listBulletWithLink?.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.heading}
          </a>
          <span>{item.description}</span>
        </li>
      );
    });
    return (
      <div className="desc__item" key={this.id}>
        <h2 className="desc__item-subTittle">{this.subTittle}</h2>
        <p className="desc__item-listBullet">{listItems}</p>
      </div>
    );
  }
}
