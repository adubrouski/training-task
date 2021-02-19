import React, { useState } from 'react';

import WindowButton from './WindowButton/WindowButton.jsx';
import WindowInput from './WindowInput/WindowInput.jsx';

import { Context } from '@src/Context/Context.js';

import './PopUpWindow.sass';

const PopUpWindow = ({ clickCoords }) => {
  const { tags, setTags, setPopUp } = React.useContext(Context);

  const [currentTag, setTag] = useState('');
  const [currentNote, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const tagsCopy = [...tags];

    const tagData = {
      tag: currentTag,
      note: currentNote,
      tagRef: null,
      noteRef: null,
      coordX: clickCoords.coordX,
      coordY: clickCoords.coordY,
    };

    tagsCopy.push(tagData);
    setTags(tagsCopy);
    setPopUp(false);
  };

  const handleCancel = () => setPopUp(false);

  return (
    <div className="popup">
      <div className="popup__content">
        <form className="popup__form" onSubmit={handleSubmit}>
          <WindowInput inputPlaceholder="Enter a tag" changeHandler={setTag} />
          <WindowInput inputPlaceholder="Enter a note" changeHandler={setNote} />
          <div className="popup__buttonsWrapper">
            <WindowButton type="submit" value="Ok" />
            <WindowButton type="button" value="Cancel" clickHandler={handleCancel} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpWindow;
