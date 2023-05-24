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
  getJSXParas(tag?: string): JSX.Element {
    const className = this.post.heading.split(" ").join("_");
    const paras = this.post.paras?.map((para, index) => {
      return (
        <p key={index} className="privacy__para">
          {para}
        </p>
      );
    });
    const heading = tag ? (
      <h4 className="privacy__heading">{this.post.heading}</h4>
    ) : (
      <h2 className="privacy__heading">{this.post.heading}</h2>
    );
    return (
      <div className="privacy__item">
        <div className={className}>
          {heading}
          {paras}
        </div>
      </div>
    );
  }

  // paragraph|list
  getJSXParaList(tag?: string): JSX.Element {
    const className = this.post.heading.split(" ").join("_");
    const list = this.post.list?.map((item, index) => {
      return (
        <li key={index} className="privacy__list__item">
          {item}
        </li>
      );
    });
    const heading = tag ? (
      <h4 className="privacy__heading">{this.post.heading}</h4>
    ) : (
      <h2 className="privacy__heading">{this.post.heading}</h2>
    );

    if (this.post.subheading) {
      return (
        <div className="privacy__item">
          <div className={className}>
          {heading}
          <h3 className="privacy__heading">{this.post.subheading}</h3>
          <p className="privacy__para">{this.post.para}</p>
          <ul className="privacy__list">{list}</ul>
          </div>
        </div>
      );
    }
    return (
      <div className="privacy__item">
        <div className={className}>
          {heading}
          <p className="privacy__para">{this.post.para}</p>
          <ul className="privacy__list">{list}</ul>
        </div>
      </div>
    );
  }

  // mix
  getJSXMix(): JSX.Element {
    const className = this.post.heading.split(" ").join("_");
    const paras = this.post.paras?.map((para, index) => {
      if (para.includes("href=")) {
        const data = (
          <p
            className="privacy__para"
            dangerouslySetInnerHTML={{ __html: para }}
          ></p>
        );
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
          <strong className="privacy__list__heading">{item}. </strong>
          <span className="privacy__list__para">
            {this.post.subList?.subParas[index]}
          </span>
        </li>
      );
    });

    return (
      <div className="privacy__item">
        <div className={className}>
          <h4 className="privacy__heading">{this.post.heading}</h4>
          <p className="privacy__para">{paras}</p>
          <ul className="privacy__list">{content}</ul>
        </div>
      </div>
    );
  }

  // paragraph|heading|children
  getJSXParaHeadingChildren(): JSX.Element {
    const className = this.post.heading.split(" ").join("_");
    const children = this.post.children?.map((item, index) => {
      switch (item.type) {
        case "paragraphs":
          const obj = new CPrivacyItem(item);
          return obj.getJSXParas("h4");
        case "paragraph|list":
          const obj1 = new CPrivacyItem(item);
          return obj1.getJSXParaList("h4");
        case "mix":
          const obj2 = new CPrivacyItem(item);
          return obj2.getJSXMix();
      }
    });

    return (
      <div className="privacy__item">
        <div className={className}>
          <h2 className="privacy__heading">{this.post.heading}</h2>
          <p className="privacy__para">{this.post.para}</p>
          <h3 className="privacy__subheading">{this.post.subheading}</h3>
          {children}
        </div>
      </div>
    );
  }

  // paragraph|mail
  getJSXParaMail(): JSX.Element {
    const className = this.post.heading.split(" ").join("_");
    return (
      <div className="privacy__item">
        <div className={className}>
          <h2 className="privacy__heading">{this.post.heading}</h2>
          <p className="privacy__para">{this.post.para}</p>
          <a href={`mailto:${this.post.mail}`} className="privacy__mail">
            {this.post.mail}
          </a>
        </div>
      </div>
    );
  }
}
