import "./sidenav.scss";
import { Close } from "@material-ui/icons";

const SideNav = ({ more, setMore }) => {
  return (
    <div className={more ? "sidenav active1" : "sidenav"}>
      <Close
        className="close"
        onClick={() => {
          console.log(more);
          setMore((prev) => !prev);
        }}
      />
      <div className="sidenavTop">
        <div className="sidenavTitle">
          <h4>Visit More LinkedIn Products</h4>
        </div>
      </div>
      <div className="sidenavBottom">
        <div className="sidenavTitle">
          <h4>LinkedIn Business Services</h4>
        </div>
        <div className="sidenavText">
          <h4>Talent Solutions</h4>
          <p>Find, attract and recruit talent</p>
          <h4>Sales Solutions</h4>
          <p>Unlock sales opportunities</p>
          <h4>Post a job for free</h4>
          <p>Get you job in front of quality candidates</p>
          <h4>Marketing Solutions</h4>
          <p>Acquire customers and grow your business</p>
          <h4>Learning Solutions</h4>
          <p>Develop talent across your organization</p>
        </div>
        <div className="sidenavTitle2">
          <h5>Create a Companty Page </h5>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
