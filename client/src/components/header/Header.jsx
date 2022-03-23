import "./header.scss";
import { linkedinLogo } from "../../assets/images";
import SideNav from "./sidenav/SideNav";

// Icons
import {
  Search,
  Home,
  SupervisorAccount,
  Work,
  ChatBubble,
  Notifications,
  ViewComfy,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const Header = ({ setMore, more }) => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={linkedinLogo.link} alt="" />
        <div className="headerSearch">
          <Search style={{ color: "gray" }} />
          <input type="text" placeholder="Search for people, jobs and more" />
        </div>
      </div>
      <div className="headerRight">
        <ul className="headerIcons">
          <li className="headerIcon active">
            <Home className="icon" />
            <h3 className="title">Home</h3>
          </li>
          <li className="headerIcon">
            <SupervisorAccount className="icon" />
            <h3 className="title">My network</h3>
          </li>
          <li className="headerIcon">
            <Work className="icon" />
            <h3 className="title">Jobs</h3>
          </li>
          <li className="headerIcon">
            <ChatBubble className="icon" />
            <h3 className="title">Messaging</h3>
          </li>
          <li className="headerIcon">
            <Notifications className="icon" />
            <h3 className="title">Notifications</h3>
          </li>
          <li className="headerIcon">
            <Avatar className="avatar">S</Avatar>
            <h3 className="title">Me</h3>
          </li>
          <div className="divider">
            <SideNav more={more} setMore={setMore} />
          </div>
          <li
            className="headerIcon"
            onClick={() => {
              console.log(more);
              setMore((prev) => !prev);
            }}
          >
            <ViewComfy className="icon" />
            <h3 className="title">More</h3>
          </li>
        </ul>
        <div className="headerText">
          <p>Network Smarter, Try Premium Free</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
