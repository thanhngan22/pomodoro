import checkIcon from '../../assets/icons/check.png'
import graphIcon from '../../assets/icons/graph.png'
import settingIcon from '../../assets/icons/setting.png'
import userIcon from '../../assets/icons/user.png'

export default function Nav() {
    return (
        <div className="nav__container h-14  flex text-white justify-between items-center ">
            <a href="/app" className="nav__logo flex">
                <img src={checkIcon} alt="check" className="w-5 h-5 mr-1 mt-1" />
                <h1 className="text-xl font-bold">Pomofocus</h1>
            </a>
            <div className="nav__menu flex h-8 items-center -mr-2 ">
            <button className="nav__menu-item nav__report  ">
                <img src={graphIcon} alt="graph" className="w-4 h-4 mr-1 " />
                Report
            </button>
            <button className="nav__menu-item nav__setting ">
                <img src={settingIcon} alt="setting" className="w-4 h-4 mr-1 " />
                Setting
            </button>
            <button className="nav__menu-item nav__login ">
                <img src={userIcon} alt="user" className="w-4 h-4 mr-1 " />
                Login
            </button>
            </div>
            </div>
    )
}