import "./mainbody.scss";

import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import News from "./news/News";

const MainBody = ({ more }) => {

  return (
    <div className={more ? "mainbody" : "mainbody active"}>
      <Sidebar />
      <Feed />
      <News />
    </div>
  );
};

export default MainBody;
