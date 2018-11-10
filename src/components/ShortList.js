import React from "react";

export default ({ data, favourites, removeFavourites, errormsg }) => {
  const namesList = favourites.map(id => {
    const { name, sex } = data[id];
    return (
      <li key={id} className={sex} onClick={() => removeFavourites(id)}>
        {name}
      </li>
    );
  });
  return (
    <div className="favourites">
      <h4>Click on name to shortlist it ...</h4>
      <ul>{namesList}</ul>
      <span className="errormsg">{errormsg}</span>
    </div>
  );
};
