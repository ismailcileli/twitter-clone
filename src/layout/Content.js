import React, {useEffect, useState} from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { TopTweetsIcon } from "../icons/Icon";
import pp from "../images/pp.png";
import db from "../firebase";
import FeedList from "../components/FeedList";

const Content = () => {

  const [tweets, setTweets] = useState([]);

  useEffect (() => {
    db.collection("feed")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
    setTweets(snapshot.docs.map((doc) => doc.data())));
    }, []);
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
      <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <TopTweetsIcon />
      </header>
      <div className = " flex px-4 py-3 space-x-4">
        <img src={pp} alt="Profile" className="w-11 h-11 rounded-full" />
       <TweetBox/>
      </div>
      <Divider/>
      <FeedList tweets = {tweets}/>

    </main>
  );
};

export default Content;
