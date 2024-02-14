import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ dogNames }) => {
  return (
    <ul className="DogList">
      <li className="DogList-DogHome" key="home">
        <Link to="/dogs">Home</Link>
      </li>
      {dogNames.map((name) => (
        <li className="DogList-DogLink" key={name}>
          <Link to={`/dogs/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
