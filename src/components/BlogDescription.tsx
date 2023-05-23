import desc from "../data/blog.json";
import { CItemsDesc, IBaseItem } from "../interface";

export default function Blog_Description() {
  const elements = new CItemsDesc(desc.items as IBaseItem[]).getJSX();

  return (
    <div className="blogDescription__container w-screen min-h-full py-12 ">
      <div className="desc__wrap">
        <h1 className="description__tittle text-pink-500">{desc.tittle}</h1>
        <div className="description__main">{elements}</div>
      </div>
    </div>
  );
}
