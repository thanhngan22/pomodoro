import { IPrivacyItem } from "./IPrivacy";

export class CPrivacyItem {
  // attributes
  post: IPrivacyItem;

  // methods
  constructor(props: IPrivacyItem) {
    this.post = props;
  }

  getInnerHTML(): JSX.Element {
    switch (this.post.type) {
      case "paragraphs":
        return this.getJSXParas();
      case "paragraph|list":
        return this.getJSXParaList();
      case "paragraph|heading|children":
        return this.getJSXParaHeadingChildren();
      case "mix":
        return this.getJSXMix();
      case "paragraph|mail":
        return this.getJSXParaMail();
      default:
        return <div></div>;
    }
  }

  // paragraphs
  getJSXParas(): JSX.Element {
    const paras = this.post.paras?.map((para, index) => {
      return (
        <p key={index} className="privacy__para">
          {para}
        </p>
      );
    });
    return (
      <div className="privacy__item">
        <h2 className="privacy__heading">{this.post.heading}</h2>
        {paras}
      </div>
    );
  }

  // paragraph|list
  getJSXParaList(): JSX.Element {
    const list = this.post.list?.map((item, index) => {
      return (
        <li key={index} className="privacy__list__item">
          {item}
        </li>
      );
    });
    return (
      <div className="privacy__item">
        <h2 className="privacy__heading">{this.post.heading}</h2>
        <p className="privacy__para">{this.post.para}</p>
        <ul className="privacy__list">{list}</ul>
      </div>
    );
  }

  // mix
  getJSXMix(): JSX.Element {
    const paras = this.post.paras?.map((para, index) => {
        if (para.includes("href=")) {
            const data = <p className="privacy__para" dangerouslySetInnerHTML={{__html: para}}></p>
            return data;
        }
      return (
        <p key={index} className="privacy__para">
          {para}
        </p>
      );
    });

    const tittles = this.post.subList?.subTittles;

    const content = tittles?.map((item, index) => {
      return (
        <li key={index} className="privacy__list__item">
          <h3 className="privacy__list__heading">{item}</h3>
          <span className="privacy__list__para">
            {this.post.subList?.subParas[index]}
          </span>
        </li>
      );
    });

    return (
      <div className="privacy__item">
        <h2 className="privacy__heading">{this.post.heading}</h2>
        <p className="privacy__para">{paras}</p>
        <ul className="privacy__list">{content}</ul>
      </div>
    );
  }

  // paragraph|heading|children
  getJSXParaHeadingChildren(): JSX.Element {
    const children = this.post.children?.map((item, index) => {
      switch (item.type) {
        case "paragraphs":
          const obj = new CPrivacyItem(item);
            return obj.getJSXParas();
        case "paragraph|list":
          const obj1 = new CPrivacyItem(item);
            return obj1.getJSXParaList();
        case "mix":
            const obj2 = new CPrivacyItem(item);
            return obj2.getJSXMix();
      }
    });

    return (
      <div className="privacy__item">
        <h2 className="privacy__heading">{this.post.heading}</h2>
        <h2 className="privacy__heading">{this.post.subheading}</h2>
        <p className="privacy__para">{this.post.para}</p>
        {children}
      </div>
    );
  }

  // paragraph|mail
  getJSXParaMail(): JSX.Element {
    return (
      <div className="privacy__item">
        <h2 className="privacy__heading">{this.post.heading}</h2>
        <p className="privacy__para">{this.post.para}</p>
        <a href={`mailto:${this.post.mail}`} className="privacy__mail">
          {this.post.mail}
        </a>
      </div>
    );
  }
}
