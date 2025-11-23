import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from "../Message";

class ChatHistory extends Component {
  render() {
    console.log(this.props.chatHistory);

    const messages = this.props.chatHistory.map((msg, index) => {
        const parsed = JSON.parse(msg.data); 
        return <Message key={index} message={parsed} />;
    });


    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
