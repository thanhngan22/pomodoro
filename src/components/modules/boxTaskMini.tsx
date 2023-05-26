import threeDotsBlackIcon from "../../assets/icons/3dots.black.png";
import BoxUpdateTask from "./boxUpdareTask";
import { CTask, CUserSetting } from "../../interface";

interface IProp {
  task: CTask;
  user: CUserSetting;
}

const BoxTaskMini: React.FC<IProp> = ({ task, user }) => {
  return (
    <div className="task__item ">
      <div className="task__item-wrapper">
        <div className="task__item-main flex justify-between">
          <button className="checkIcon__wrapper">
            <div className="checkIcon__container"></div>
          </button>
          <div className="task__content w-5/6 ">
            <p className="task__name text-black px-2 py-1 font-semibold opacity-85 ">{task.getName()}</p>
          </div>
          <div className="task__config">
            <span className="task__count">
            </span>
            <button className="border rounded px-1.5 py-1.5   ">
              <img
                src={threeDotsBlackIcon}
                alt="thee-dots-black-icon"
                className="w-4 h-4 opacity-40 task__config-icon"
              />
            </button>
          </div>
        </div>
        <div className="task__note bg-yellow-100 py-3 ml-5 mt-3 hidden "></div>
      </div>
      <BoxUpdateTask task={task} user={user} />
    </div>
  );
};

export default BoxTaskMini;
