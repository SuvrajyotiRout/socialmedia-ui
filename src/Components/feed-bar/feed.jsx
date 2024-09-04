import "./feed.css"
import { BsFileEarmarkPost, BsThreeDotsVertical } from "react-icons/bs";
import { CgTag } from "react-icons/cg";
import { FaLocationDot, FaRegComments } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { useState } from "react";
function Feed() {
    let [like, setLikes] = useState()

    return <>
        <div className="feed-container">
            <div className="feed-content">
                <div className="post-card">
                    <div className="postupper-part">
                        <img src="profile.jpg" alt="" />
                        <input type="text" placeholder="What's in your mind" />
                    </div>
                    <hr className="post-hr" />
                    <div className="feed-icon">
                        <div className="feed-icons">
                            <BsFileEarmarkPost className="post-photo" />
                            <span>Photo or Video</span>
                        </div>
                        <div className="feed-icons">
                            <CgTag className="tags" />
                            <span>Tags</span>
                        </div>
                        <div className="feed-icons">
                            <FaLocationDot className="location" />
                            <span>Location</span>
                        </div>
                        <div className="feed-icons">
                            <FaSmileWink className="feeling" />
                            <span>Feelings</span>
                        </div>
                        <div className="sharebtn">
                            <button>Share</button>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post1.jpeg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post7.jpeg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post2.jpg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post3.jpeg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post4.jpg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post5.jpeg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="posts-contents">
                        <div className="posts-uppercontent">
                            <div className="upperpost-left">
                                <img src="profile.jpg" alt="" />
                                <span >Suvrajyoti Rout</span>
                                <span><p>5 mins ago</p></span>
                            </div>

                            <div className="three-dots">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="posts-middlecontent">
                        <div className="middlecontent">
                            <p className="post-title">Love Nature</p>
                            <img src="post6.jpg" />
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="post-reactions">
                            <div className="likes">
                                <BiLike />
                                <span> 1.1k Likes</span>
                            </div>
                            <div className="comments">
                                <FaRegComments />
                                <span> 9 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Feed