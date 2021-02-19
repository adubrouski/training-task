import React from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [picture, setPicture] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const [popUpEnabled, setPopUp] = React.useState(false);

  return (
    <Context.Provider
      value={{
        picture,
        setPicture,
        tags,
        setTags,
        popUpEnabled,
        setPopUp,
      }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
