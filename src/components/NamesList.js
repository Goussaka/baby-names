import React from "react";
export default ({ data, filterText, addFavourites }) => {
  const ListData = data
    .filter(name => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map(name => {
      return (
        <li
          key={name.id}
          className={name.sex}
          onClick={() => addFavourites(name.id)}
        >
          {name.name}
        </li>
      );
    });

  return (
    <div className="App">
      <ul>{ListData}</ul>
    </div>
  );
};
