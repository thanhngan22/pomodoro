

export default function Pomofocus() {
    return (
        <div className="pomo__container flex flex-col pb-80 pt-10 px-16 text-white  ">
            <div className="display__timer px-20 items-center flex flex-col">
                <div className="pomo__break-types pt-4">
                    <button  className="pomodoro__main-btn pomo__types-btn mr-3 ">
                        Pomodoro
                    </button>
                    <button className="Short__Break-btn pomo__types-btn mx-4">
                        Short Break
                    </button>
                    <button className="Long__Break-btn pomo__types-btn ml-3">
                        Long Break
                    </button>
                </div>
                <div className="time__remaining py-10 text-9xl">
                        25:00
                </div>
                <div className="start__button-container">
                    <button className="start__button">START</button>
                </div>
            </div>
            <div className="target__heading">
                <div className="current__task">
                    #1
                </div>
                <h1 className="target__heading-title">
                    Time to focus !
                </h1>
            </div>
            <div className="tasks__menu flex justify-between">
                <h2>Tasks</h2>
                <button className="action__tasks">
                    ...
                    </button>                    
            </div>
            <div className="add__task">
                <button className="add__task-btn">
                    Add Task
                </button>
            </div>
            <div className="tasks__list">

            </div>

        </div>
    )
}