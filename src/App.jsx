import React from "react";
import Slider from "./components/slidercomponent/Slider";
import "./App.css";

const App = () => {
  const images = [
    {
      imageUrl: "/src/assets/jocelyn.png",
      name: "Jocelyn",
      description: "Description of Image 1",
    },
    {
      imageUrl: "/src/assets/jordyn.png",
      name: "Jordyn",
      description: "Description of Image 2",
    },
    {
      imageUrl: "/src/assets/martin.png",
      name: "Martin",
      description: "Description of Image 2",
    },
    {
      imageUrl: "/src/assets/jordyn.png",
      name: "Jordyn",
      description: "Description of Image 2",
    },
    {
      imageUrl: "/src/assets/martin.png",
      name: "Martin",
      description: "Description of Image 2",
    },
  ];

  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
};

export default App;
