import { ITask, CTask } from "../../interface";

function boxUpdateTask(props : CTask) {
  return (
    <div className="wrapper__box-update-task">
      <input className="update__text" type="text" />
      <div className="update__act">
        <h3 className="update__act--title">Act / Est Pomodoros</h3>
        <div className="update__act--wrapper">
          <input className="update__act--input" type="number" />
          <div className="update__act--split"></div>
          <input className="update__act--input" type="number" />
          <button className="update__increase"></button>
          <button className="update__decrease"></button>
        </div>
        <div className="update__more">
            <button className="update__more--btn">+ Add Note</button>
            <button className="update__more--btn">+ Add Project</button>
            <div className="update__more-icon"></div>
        </div>
        <div className="update__footer">
            <button className="update__delete">Delete</button>
            <button className="update__cancel">Cancel</button>
            <button className="update__save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default {
  boxUpdateTask,
};
