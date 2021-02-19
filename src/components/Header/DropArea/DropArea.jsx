import React, { useState } from 'react';

import { Context } from '@src/Context/Context.js';

import './DropArea.sass';

const DropArea = () => {
  const { setPicture, setTags } = React.useContext(Context);

  const [isDrag, setDragState] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();

    setDragState(true);
  };

  const handleOver = (e) => e.preventDefault();

  const handleLeave = (e) => {
    e.preventDefault();

    setDragState(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files ? e.target.files[0] : e.dataTransfer.files[0]);
    fileReader.onload = () => {
      setPicture(fileReader.readyState === 2 ? fileReader.result : null);
      setTags([]);
    };

    setDragState(false);
  };

  return (
    <form
      className={isDrag ? 'drop-area drop-area__bg' : 'drop-area'}
      onDragEnter={handleDragEnter}
      onDragOver={handleOver}
      onDragLeave={handleLeave}
      onDrop={handleUpload}>
      {isDrag ? (
        <div className="drop-area__dragText">Drop photo here to start uploading!</div>
      ) : (
        <>
          <div className="drop-area__text">Drag images here</div>
          <div className="drop-area__text">or</div>
          <input
            type="file"
            id="drop-area__plug"
            className="drop-area__plug"
            accept="image/*"
            onChange={handleUpload}
          />
          <label className="drop-area__button" htmlFor="drop-area__plug">
            Select an image
          </label>
        </>
      )}
    </form>
  );
};

export default DropArea;
