import "./leftcontent.css"
import { MdOutlineRssFeed, MdGroups, MdOutlineEmojiEvents } from "react-icons/md";
import { PiChatsBold, PiVideoFill, PiBookmarkSimpleFill, PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

function Leftcontent() {
    return <>
        <div className="left-container">
            <div className="techbook-services">

                <div className="service">
                    <MdOutlineRssFeed className="lefticon" />
                    <span>Feed</span>

                </div>
                <div className="service">
                    <PiChatsBold className="lefticon" />
                    <span>Chats</span>
                </div>
                <div className="service">
                    <PiVideoFill className="lefticon" />
                    <span>Videos</span>
                </div>
                <div className="service">
                    <MdGroups className="lefticon" />
                    <span>Groups</span>
                </div>
                <div className="service">
                    <PiBookmarkSimpleFill className="lefticon" />
                    <span>Bookmarks</span>
                </div>
                <div className="service">
                    <FaQuestionCircle className="lefticon" />
                    <span>Questions</span>
                </div>
                <div className="service">
                    <PiSuitcaseSimpleBold className="lefticon" />
                    <span>Jobs</span>
                </div>
                <div className="service">
                    <MdOutlineEmojiEvents className="lefticon" />
                    <span>Events</span>
                </div>
                <div className="service">
                    <FaGraduationCap className="lefticon" />
                    <span>Courses</span>
                </div>


            </div>
            <div className="showmore-btn"> <button>Show More</button></div>
            <hr />
        </div>
    </>
}
export default Leftcontent