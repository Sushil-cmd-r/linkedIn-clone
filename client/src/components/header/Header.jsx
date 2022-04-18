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
import { logout } from "../../features/userSlice";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { filterComments } from "../../features/commentSlice";
import { useEffect, useState } from "react";

const Header = ({ setMore, more }) => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const user = useSelector((state) => state.users.user?.userName);
  const comments = useSelector((state) => state.comments.comments);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(filterComments(search));
  }, [search, comments]);

  return (
    <div className="header">
      <div className="headerLeft">
        <img src={linkedinLogo.link} alt="" />
        <div className="headerSearch">
          <Search style={{ color: "gray" }} />
          <input
            type="text"
            placeholder="Search for people, jobs and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
            <Avatar className="avatar" onClick={handleLogout}>
              {user[0]}
            </Avatar>
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
