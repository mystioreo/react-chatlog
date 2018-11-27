import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const Bubble = (props) => {



  return (<article className={"chat-entry" + (props.sender === "Vladimir" ? " local" : " remote")}>
            <p className="entry-name">{props.sender}</p>
            <div className="entry-bubble">
                <p className="entry-body">{props.body}</p>
                <p className="entry-time"><Timestamp time={props.timeStamp}/></p>
            </div>
          </article>)
}

Bubble.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
}

export default Bubble;
