import React from "react";
import UserPanel from "./UserPanel";
import ChatRooms from "./ChatRooms";
import DirectMessages from "./DirectMessages";

const SidePanel = () => {
  return (
    <div className="bg-gray-300 p-5 min-h-screen ">
      <UserPanel />
      <ChatRooms />
      <DirectMessages />
    </div>
  );
};

export default SidePanel;
