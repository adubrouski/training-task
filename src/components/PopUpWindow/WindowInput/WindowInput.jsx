import React from 'react';

import './WindowInput.sass';

const WindowInput = (props) => (
  <input
    type="text"
    placeholder={props.inputPlaceholder}
    onChange={(e) => props.changeHandler(e.target.value)}
    className="popup__input"
    required
    maxLength="50"
  />
);

export default WindowInput;
