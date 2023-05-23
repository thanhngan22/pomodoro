import React from "react";

import Nav from "./modules/nav";
import Pomofocus from "./Pomofocus";

export default function Home() {
  return (
    <div className="container w-full h-full ">
      <div className="main__app  w-screen min-h-full flex justify-center ">
        <ul className="main__app-container h-full    ">
          <Nav />
          <Pomofocus />
        </ul>
      </div>
      <div className="description w-screen h-80 bg-green-300">
        Description here
      </div>
      <div className="footer w-screen h-80 bg-yellow-600">Footer here</div>
    </div>
  );
}
