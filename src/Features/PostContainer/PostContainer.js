import React from "react";
import PostCards from "../../Components/PostCards/PostCards";
import "./PostContainer.css";

function PostContainer({ data }) {
  return (
    <div className="post-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              {data.map((item, index) => (
                <PostCards key={index} card={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
