import React from "react";

const FollowersCard = ({ img, bio, user, followers, blog }) => {
  return (
    <div>
      <img src={img} />
      <p>Name: {user}</p>
      <p>Bio: {bio}</p>
      <p>Followers: {followers}</p>
      <p>Blog: {blog}</p>
    </div>
  );
};
export default FollowersCard;