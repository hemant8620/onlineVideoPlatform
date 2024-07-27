import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Akshay",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
    replies: [
      {
        name: "Akshay",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
        replies: [],
      },
      {
        name: "Akshay",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
        replies: [
          {
            name: "Akshay",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
            replies: [
              {
                name: "Akshay",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
    replies: [
      {
        name: "Akshay",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
        replies: [
          {
            name: "Akshay",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
            replies: [],
          },
          {
            name: "Akshay",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
            replies: [
              {
                name: "Akshay",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolor accusamus voluptatum eos vero! Dicta similique deleniti assumenda iste corrupti.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="">
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
