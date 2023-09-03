import React from "react";
import data from "../data";

function Card() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card d-flex flex-column justify-content-center align-items-center custom-card-width">
              <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text mb-0 bio-para">
                  <span className="bio-span">Bio: </span>
                  {item.bio}
                </p>
                <p className="card-text mb-0 bio-para">
                  <span className="bio-span">I want to be after 5 years: </span>
                  {item.after5year}
                </p>
                <p className="card-text mb-0 bio-para">
                  <span className="bio-span">My Github: </span>
                  <a href={`https://github.com/${item.username}`} target="_blank" rel="noopener noreferrer">
                    {item.username}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
