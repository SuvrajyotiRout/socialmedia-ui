import "./rightcontent.css"
import { FaGift } from "react-icons/fa";

function Rightcontent() {
    return <>
        <div className="right-container">
            <div className="friends-birthday">
                <FaGift className="gift-icon" />
                <p><b>Jaydev Prasad</b>and <b>3 others</b> have their <br></br>birthday today</p>

            </div>
            <div className="ads-section">
                <div className="ads">
                    <img src="techbook-add.jpeg" alt="" />
                </div>
            </div>
            <div className="online-friends">
                <h5>Online Friends</h5>
            </div>
        </div>
    </>
}
export default Rightcontent