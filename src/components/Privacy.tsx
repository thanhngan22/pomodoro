import pomoIcon from "../assets/icons/favicon.png";
import data from "../data/privacy.json";
import { IPrivacyItem, CPrivacyItems } from "../interface";

export default function PrivacyPage() {
  const props = data.items as IPrivacyItem[];
  const privacy_innerHTML = new CPrivacyItems(props).getJSX();

  return (
    <div id="privacy__container">
      <div className="flex justify-center border-b border-gray-400">
        <a href="/" className="privacy__nav flex justify-start  py-4   ">
          <img src={pomoIcon} alt="pomo icon" className="w-6 h-6 self-center" />
          <h1 className="font-semibold text-3xl pl-2 text-red-600">
            Pomofocus
          </h1>
        </a>
      </div>
      <div className="privacy__content">{privacy_innerHTML}</div>
    </div>
  );
}
