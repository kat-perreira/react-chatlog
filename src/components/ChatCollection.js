import React from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessage.css';


const ChatCollection = (props) => {
  const messages = props.data
  const messageCollection = messages.map(
    (message, i) => {
      return <ChatMessage key={i} sender={ message.sender } body={message.body} timeStamp={ message.timeStamp} />
    });

    return (
      <section>
      {messageCollection}
      </section>

    );
};


export default ChatCollection;
