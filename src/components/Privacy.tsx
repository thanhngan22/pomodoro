import pomoIcon from "../assets/icons/favicon.png";
import data from "../data/privacy.json";
import { IPrivacyItem, CPrivacyItems } from "../interface";
import Footer from "./Footer";

import { Link } from "react-router-dom";

export default function PrivacyPage() {
  const props = data.items as IPrivacyItem[];
  const privacy_innerHTML = new CPrivacyItems(props).getJSX();

  return (
    <div id="privacy__container">
      <div className="flex justify-center border-b border-gray-400">
        <Link to="/" className="privacy__nav flex justify-start    ">
          <img src={pomoIcon} alt="pomo icon" className="w-6 h-6 self-center" />
          <h1 className="font-semibold pl-2 ">
            Pomofocus
          </h1>
        </Link>
      </div>
      <div className="privacy__content">{privacy_innerHTML}</div>
      <Footer />
    </div>
  );
}
