import React from 'react';

import PopUpWindow from '../PopUpWindow/PopUpWindow.jsx';
import ImageTag from './ImageTag/ImageTag.jsx';

import { Context } from '@src/Context/Context.js';

import plug from '@src/assets/img/gallery.svg';

import './Post.sass';

const Post = () => {
  const { tags, picture, popUpEnabled, setPopUp } = React.useContext(Context);

  const [clickCoords, setClickCoords] = React.useState({});

  const menuItems = ['Filters', 'Presets', 'Draw mode', 'Share'];

  const handleClick = (e) => {
    setPopUp(true);
    setClickCoords({ coordX: e.nativeEvent.offsetX, coordY: e.nativeEvent.offsetY });
  };

  return (
    <section className="post">
      <div className="post__menu">
        <ul>
          {menuItems.map((item) => (
            <li key={item} className="post__menu-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="post__image">
        <div className="post__image-content">
          <div className="post__image-wrapper">
            <img src={picture} className="post__image-wrapper--picture" onClick={handleClick} />
            {tags.map((tag, index) => (
              <ImageTag key={index} tag={tag} />
            ))}
          </div>
          {popUpEnabled ? <PopUpWindow clickCoords={clickCoords} /> : null}
          {!picture && <img src={plug} className="post__image-content--plug" />}
        </div>
      </div>
    </section>
  );
};
export default Post;
