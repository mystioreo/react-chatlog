import React from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';

const ChatLog = (props) => {
  const chatComponents = props.chats.map ((chat) => {
    return <Bubble sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp}/>
  })

  return (
    <section className="chat-log">
      {chatComponents}
    </section>
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ChatLog;
