import "./App.css";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import NotFound from "./NotFound";

import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App(params) {
  const dogNames = params.dogs.map((dog) => dog.name);
  return (
    <div className="App">
      <Nav dogNames={dogNames} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={App.defaultProps.dogs} />}></Route>
        <Route path="/dogs/:name" element={<DogDetails dogs={params.dogs} />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
        {/* Wasn't sure how to do this since Redirect does not work in this version */}
        {/* <Redirect to="/dogs" /> */}
      </Routes>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: ["Whiskey loves eating popcorn.", "Whiskey is a terrible guard dog.", "Whiskey wants to cuddle with you!"],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: ["Duke believes that ball is life.", "Duke likes snow.", "Duke enjoys pawing other dogs."],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: ["Perry loves all humans.", "Perry demolishes all snacks.", "Perry hates the rain."],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: ["Tubby is really stupid.", "Tubby does not like walks.", "Angelina used to hate Tubby, but claims not to anymore."],
    },
  ],
};

export default App;
