import React from "react";
import Navlinks from "../Navbar/Navlinks";
import Blog from "../Blog/Blog";
import Hobbyla from "../Hobby/Hobbyla";
import Tutorials from "../Tutorials/Tutorials";
import ArtApp from "../Art/ArtApp";
import News from "../News/News";

const Dashboard = () => {
  return (
    <div>
      {/* titleContainer */}
      <div className="titleContainer">
        <div id="title">Community Blog</div>

        <div className="titleDescript">
          Explore My Insights and Perspectives: Stay Informed with the Latest
          News and Upcoming Events in their respective field. Reach Out for
          Further Details!
        </div>

        {/* menu button */}
        <Navlinks />
      </div>

      {/* news Container  */}
      <div className="newsContainer">
        <News />
      </div>
      {/* blog container */}
      <div className="blogContainer">
        <Blog />
      </div>

      {/* Hobby-la Container  */}
      <div className="hobbyContainer">
        <Hobbyla />
      </div>

      {/* Tutorial Container  */}
      <div className="tutorialsContainer">
        <Tutorials />
      </div>

      {/* artApp Container  */}
      <div className="artAppContainer">
        <ArtApp />
      </div>

    </div>
  );
};

export default Dashboard;
