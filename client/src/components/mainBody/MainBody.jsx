import "./mainbody.scss";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import News from "./news/News";

const MainBody = ({ more, modal, open, close }) => {
  return (
    <div
      className={
        more ? (modal ? "mainbody modalActive" : "mainbody") : "mainbody active"
      }
    >
      <Sidebar />
      <Feed modal={modal} open={open} close={close} />
      <News />
    </div>
  );
};

export default MainBody;
