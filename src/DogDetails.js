import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = (params) => {
  const { name } = useParams();
  const dog = params.dogs.find((dog) => dog.name === name);

  if (!dog) return <h1> No dogs found by that name: {name} </h1>;
  else
    return (
      <div className="DogDetails">
        <h1 className="DogDetails-Header">Hello my name is {dog.name}</h1>
        <p className="DogDetails-Age">I am {dog.age} years old.</p>
        <img alt="dog" src={dog.src}></img>
        <ul className="DogDetails-Facts">
          Here are some Facts about me:
          {dog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
    );
};

export default DogDetails;
