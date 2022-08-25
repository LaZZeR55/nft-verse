import React, { useState, useEffect } from "react";
import "./Cards.css";

function Cards() {
  const [items, setItems] = useState();
  function getData() {
    fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Cards">
      <div className="row justify-content-start">
        {items?.content?.map((nft) => (
          <div className="col-3">
            <div className="card">
              <img src={nft.coverImageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{nft.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
