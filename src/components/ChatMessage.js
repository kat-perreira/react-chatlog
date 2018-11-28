import React from 'react';
import './ChatMessage.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;


const name = props.sender==="Estragon"  ? "chat-entry remote": "chat-entry local";
console.log(name);

  return (
    <section className= {name}>
      <div className="entry-name"> {sender} </div>
      <div className="entry-bubble">
        <div className="entry-body"> {body} </div>
        <div className="entry-time"> <Timestamp time={timeStamp}/> </div>
      </div>
    </section>
  )

};

ChatMessage.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  age: PropTypes.string
};

export default ChatMessage;
