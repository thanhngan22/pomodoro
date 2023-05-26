import { CUserSetting } from "../../interface"
import BoxTaskMini from "./boxTaskMini";

interface IProp {
    user : CUserSetting;
}

const ShowListTasks : React.FC<IProp> = ({user}) => {

    let jsx : JSX.Element[] = [];
    user.todolist.list.forEach((task, index) => {
        // classname common : box-task__item
        // class name for each task: box-task__item--{id}
        const _classNameCommon = "box-task__item";
        const _classNameUnique = `${_classNameCommon}--${task.id}`;
        const _className = `${_classNameCommon} ${_classNameUnique}`;
        jsx.push (
            <li key={index} className={_className}>
                <BoxTaskMini task={task} user = {user} />
            </li>
        )
    })

    console.log("jsx: ", jsx);

    return (
        <div className="tasks-list__wrapper">
            <ul className="tasks-list">
                {jsx}
            </ul>
        </div>
    )

}

export default ShowListTasks