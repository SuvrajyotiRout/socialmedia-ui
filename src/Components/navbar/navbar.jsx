import "./navbar.css"
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";


function Navbar() {
    return <>
        <div className="nav-container">
            <div className="project-logo">
                <h2>TechBook</h2>
            </div>
            <div className="search-box">
                <div className="input-box">
                    <FaSearch className="search-logo" />
                    <input type="text" placeholder="Search for friends, posts & video" />
                </div>
            </div>
            <div className="notifications">
                <div className="timelines">
                    <p>Homepage</p>
                    <p>Timeline</p>
                </div>
            </div>
            <div className="notification">
                <div className="notificationIcons"><IoPersonCircleOutline className="icons" />
                    <div className="reddot"></div>
                </div>
                <div className="notificationIcons"><MdOutlineMessage className="icons" />
                    <div className="reddot"></div>
                </div>
                <div className="notificationIcons"><FaRegBell className="icons" />
                    <div className="reddot"></div>
                </div>



            </div>
            <div className="profile-photo">
                <img src="profile.jpg" alt="Profile-pic" />
            </div>

        </div>
    </>


}
export default Navbar