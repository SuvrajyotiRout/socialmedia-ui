import "./Home.css"
import Leftcontent from '../leftside-bar/leftcontent'
import Rightcontent from '../rightside-bar/rightcontent'
import Feed from '../feed-bar/feed'

function Home() {
    return (
        <>
            <div className="home">

                <div className="homepage">
                    <Leftcontent />
                    <Feed />
                    <Rightcontent />
                </div>
            </div>

        </>
    )
}
export default Home