import React from "react";
import "./collection-preview.style.scss";

const CollectionPreview = ({ title, routeName, items }) => (
  <div className="collection-preview">
    <h1 className="title"><a href={routeName}>{title.toUpperCase()}</a></h1>
    <div className="preview">
      {items.map((item) => (
        <div key={item.id} className="item" >



        <div
          className="background-image"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{item.name.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>








        </div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
