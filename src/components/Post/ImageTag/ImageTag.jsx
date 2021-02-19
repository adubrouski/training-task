import React from 'react';

import './ImageTag.sass';

const ImageTag = ({ tag }) => {
  const tagRef = React.useRef();

  const handleClick = () => {
    tag.noteRef.classList.toggle('note--highlight');
    tag.tagRef.classList.toggle('tag--highlight');
  };

  React.useEffect(() => {
    tag.tagRef = tagRef.current;
  }, []);

  return (
    <div
      style={{ top: `${tag.coordY}px`, left: `${tag.coordX}px` }}
      className="tag"
      onClick={handleClick}
      ref={tagRef}>
      {tag.tag}
    </div>
  );
};

export default ImageTag;
