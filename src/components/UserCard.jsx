import React from "react";
import Button from "./Button";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="flex justify-center m-2 items-center p-6 bg-purple-400 rounded-lg shadow-xl max-w-xs min-w-xs">
        <div className="flex flex-col items-center space-y-4">
          <img
            className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-black"
            alt={`${user.name}'s profile`}
            src={user.profilePhoto}
          />

          <div className="text-center text-white space-y-2">
            <p className="text-2xl font-semibold">Name: {user.name}</p>
            <p className="text-lg">Role: {user.role}</p>
            <p className="text-md italic">Location: {user.location}</p>
          </div>
          <div className="w-full">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
