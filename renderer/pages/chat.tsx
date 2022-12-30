import React from "react";
import Link from "next/link";
import MainPanel from "../components/mainPanel/MainPanel";
import SidePanel from "../components/sidePanel/SidePanel";

function Chat() {
  return (
    <div className="flex">
      <div className="w-40">
        <SidePanel />
      </div>
      <div className="w-full ">
        <MainPanel />
      </div>
    </div>
  );
}

export default Chat;
