import { CTask } from "../../interface";

import UpIcon from "../../assets/icons/caret-up.png"
import DownIcon from "../../assets/icons/caret-down.png"

import { useRef, useEffect } from "react";

function BoxUpdateTask() {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return (
    <div className="wrapper__box-update-task w-full bg-white text-black flex flex-col ">
      <input className="update__text  w-full " placeholder="What are you working on ?"  type="text" ref={inputRef} />
      <div className="update__act w-full">
        <h3 className="update__act--title">Act / Est Pomodoros</h3>
        <div className="update__act--wrapper flex py-4">
          <input className="update__act--input" type="number" />
          <div className="update__act--split mx-2 py-2 text-gray-600 font-semibold">/</div>
          <input className="update__act--input " type="number" />
          <div className="increase__decrease-btn ml-4 items-center flex">
          <button className="update__increase  mr-1">
            <img src={UpIcon} alt="up-icon" className="w-3 h-3 mx-auto opacity-40" />
          </button>
          <button className="update__decrease">
            <img src={DownIcon} alt="down-icon" className="w-3 h-3 mx-auto opacity-40" />
          </button>
          </div>
        </div>
        <div className="update__more font-semibold text-sm text-gray-700 opacity-80">
            <button className="update__more--btn mr-3 underline">+ Add Note</button>
            <button className="update__more--btn underline">+ Add Project</button>
            <div className="update__more-icon"></div>
        </div>

      </div>
      <ul className="update__footer w-full py-3  flex justify-between font-semibold">
          <li>
            <button className="update__delete px-5 py-1 ml-4 rounded text-gray-400">Delete</button>
          </li>
          <li className="">
          <button className="update__cancel px-4 py-1 rounded text-gray-400">Cancel</button>
            <button className="update__save bg-black opacity-75 font-md mx-5 py-1 px-5 text-white rounded">Save</button>
          </li>

        </ul>
    </div>
  );
}

export default BoxUpdateTask;