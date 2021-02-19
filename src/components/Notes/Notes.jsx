import React from 'react';

import Note from './Note/Note.jsx';

import { Context } from '@src/Context/Context.js';

import './Notes.sass';

const Notes = () => {
  const { tags } = React.useContext(Context);

  return (
    <section className="notes">
      <h2 className="notes__title">List of notes</h2>
      <div className="notes__wrapper">
        <span className="notes--latest">Latest</span>
        <input type="checkbox" className="notes__toggle" defaultChecked></input>
        <span className="notes--all">All</span>
      </div>
      {tags.length !== 0 ? (
        tags.map((tag) => {
          return <Note tag={tag} key={tag.coordX} />;
        })
      ) : (
        <p className={'notes__placeholder'}>
          There is nothing here right now, add a tag to see the notes
        </p>
      )}
    </section>
  );
};

export default Notes;
