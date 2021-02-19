import React from 'react';

import './WindowButton.sass';

const WindowButton = (props) => (
  <input
    type={props.type}
    value={props.value}
    className="popup__button"
    onClick={props.clickHandler}
  />
);

export default WindowButton;
