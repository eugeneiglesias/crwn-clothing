import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => (
  <div className="collection-preview">
    <h1 className="title">
      <a href={routeName}>{title.toUpperCase()}</a>
    </h1>
    <div className="preview">
      {items
        //filter by item and index
        //all these could have perfomance issues if the array gets too large
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
