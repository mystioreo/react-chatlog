import React from 'react';
import PropTypes from 'prop-types';

const AppTitle = (props) => {
  const names = [];
  let i = 0;
  while (names.length < 2) {
    if (!names.includes(props.chats[i].sender)) {
      names.push(props.chats[i].sender);
    }
    i++;
  }

  const name1 = names[0];
  const name2 = names[1];
  return (<span>Chat Between {name1} and {name2}</span>)
}

AppTitle.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AppTitle;
