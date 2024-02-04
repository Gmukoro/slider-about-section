import React from "react";
import Slider from "./components/slidercomponent/Slider";
import "./App.css";

const App = () => {
  const images = [
    {
      imageUrl: "/src/assets/jocelyn.png",
      name: "Image 1",
      description: "Description of Image 1",
    },
    {
      imageUrl: "image2.jpg",
      name: "Image 2",
      description: "Description of Image 2",
    },
    {
      imageUrl: "image2.jpg",
      name: "Image 3",
      description: "Description of Image 2",
    },
    {
      imageUrl: "image2.jpg",
      name: "Image 4",
      description: "Description of Image 2",
    },
    {
      imageUrl: "image2.jpg",
      name: "Image 5",
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
