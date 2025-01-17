import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="img" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
