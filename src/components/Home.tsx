import React from "react";

import Nav from "./modules/nav";
import Pomofocus from "./Pomofocus";
import BlogDescription from "./BlogDescription";
import Footer from "./Footer";

export default function Home() {
  return (
    <div id="home__page" className="container w-full h-full ">
      <div className="main__app w-screen h-full flex justify-center pb-12 ">
        <ul className="main__app-container h-full  ">
          <Nav />
          <Pomofocus />
        </ul>
      </div>
      <BlogDescription />
      <Footer />
    </div>
  );
}
