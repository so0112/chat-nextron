import React from "react";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";

const MainPanel = () => {
  return (
    <div className="p-8">
      <MessageHeader />

      <div className="p-4 mb-4 w-full h-96 border-4 rounded border-solid"></div>
      <MessageForm />
    </div>
  );
};

export default MainPanel;
