import { Avatar } from "@material-ui/core";
import "./sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const imgUrl = "https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq";
  const user = useSelector((state) => state.users.user?.userName);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="profile">
          <img src={imgUrl} alt="#" />
          <Avatar className="profileIcon">{user[0]}</Avatar>
          <div className="profileInfo">
            <h4>{user}</h4>
            <p>Student At Vishwakarma Institute of Technology</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="profileBottom">
          <span>
            <h5 style={{ color: "gray" }}>Connections</h5>
            <h5>Grow Your network</h5>
          </span>
          <span>
            <h5 style={{ color: "gray" }}>Invitations</h5>
          </span>
          <div className="line"></div>
          <span style={{ padding: "15px 15px", marginTop: "-15px" }}>
            My Items
          </span>
        </div>
      </div>
      <div className="sidebarBottom">
        <ul>
          <li>Groups</li>
          <li>Events</li>
          <li>Followed Hashtags</li>
        </ul>
        <div className="line"></div>
        <h4>Discover More</h4>
      </div>
    </div>
  );
};

export default Sidebar;
