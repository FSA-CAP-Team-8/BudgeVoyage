/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const BucketList = () => {
  const [likedItems, setLikedItems] = useState([]);

  const addItem = (item) => {
    setLikedItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (item) => {
    setLikedItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  };

  return (
    <div className="bucketList">
      <h2>Bucket List</h2>
      {likedItems.length === 0 ? (
        <p>No items liked yet.</p>
      ) : (
        <ul>
          {likedItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BucketList;
