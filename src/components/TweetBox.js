import React, {useState} from "react";
import { EmojiIcon, GifIcon, MediaIcon, PollIcon, ScheduleIcon } from "../icons/Icon";
import db from "../firebase";
import firebase from "firebase";
//import pp from "../images/pp.png";

const TweetBox = () => {
  const [content, setContent] = useState ("");
  const sendTweet = () => {
if (content  !== '') {
  db.collection('feed').add({
    displayName : "İsmail Çileli",
    userName: "@ismailcileli",
    content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    image: "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg",
    avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQGYc8ac9_ZKug/profile-displayphoto-shrink_200_200/0/1596629183214?e=1634774400&v=beta&t=eBci5B-eX9CPZizmYjvyQfbnCJwo0iu2B4Xbva29O6k",  
  });
  setContent("");
}
    }
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent "
        placeholder="What's happening? "
        onChange = {(e)=> setContent(e.target.value)}
        value = {content}
      />
      <div className = "flex items-center justify-between">
        <div className = "flex -ml-3">
            <div className = "flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light">
            <MediaIcon/>
            </div>
            <div className = "flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light">
            <GifIcon/>
            </div>
            <div className = "flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light">
            <PollIcon/>
            </div>
            <div className = "flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light">
            <EmojiIcon/>
            </div>
            <div className = "flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light">
            <ScheduleIcon/>
            </div>
            
           

        </div>
        <button className = "bg-primary-base text-white rounded-full px-4 py-2 font-medium hover:bg-primary-dark"
          onClick = {sendTweet}   
        >Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
