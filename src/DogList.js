import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  return (
    <ul className="DogList">
      {dogs.map((dog) => (
        <li className="DogList-Dog" key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>
            <img alt="dog" src={dog.src}></img>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DogList;
