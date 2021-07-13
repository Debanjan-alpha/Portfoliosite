import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ME.
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+91 8167563561</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>db.19u10251@btech.nitdgp.ac.in</span>
          </div>
        </div>
        <div className="right">
          <div className="dropdown" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
