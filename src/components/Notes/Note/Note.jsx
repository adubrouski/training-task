import React from 'react';

import './Note.sass';

const Note = ({ tag }) => {
  const noteRef = React.useRef();

  const setNoteClick = () => {
    tag.tagRef.classList.toggle('tag--highlight');
    tag.noteRef.classList.toggle('note--highlight');
  };

  React.useEffect(() => {
    tag.noteRef = noteRef.current;
  }, []);

  return (
    <div className="note" onClick={setNoteClick} ref={noteRef}>
      {tag.note}
    </div>
  );
};

export default Note;
