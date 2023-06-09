import { CUserSetting } from "../../interface"
import BoxTaskMini from "./boxTaskMini";

import {useEffect} from "react";

interface IProp {
    user : CUserSetting;
    onUserChange? : (newUser : CUserSetting) => void;
}

const ShowListTasks : React.FC<IProp> = ({user, onUserChange}) => {
    // console.log("render show list tasks ...")

    let jsx : JSX.Element[] = [];
    user.todolist.list.forEach((task, index) => {
        // classname common : box-task__item
        // class name for each task: box-task__item--{id}
        const _classNameCommon = "box-task__item";
        const _classNameUnique = `${_classNameCommon}--${task.id}`;
        const _css = 'py-1'
        const _className = `${_classNameCommon} ${_classNameUnique} ${_css}`
        jsx.push (
            <li key={index} className={_className}>
                <BoxTaskMini task={task} user = {user} onUserChange={onUserChange}  />
            </li>
        )
    })

    // console.log("jsx: ", jsx);

    return (
        <div className="tasks-list__wrapper">
            <ul className="tasks-list">
                {jsx}
            </ul>
        </div>
    )

}

export default ShowListTasks