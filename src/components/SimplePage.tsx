
import Nav from "./modules/nav";
import Pomofocus from "./Pomofocus";


export default function SimplePage() {
    return (
        <div className="main__app w-screen h-screen flex justify-center ">
        <ul className="main__app-container h-full    ">
          <Nav />
          <Pomofocus />
        </ul>
        </div>
    )

}