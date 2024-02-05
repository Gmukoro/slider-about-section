import React from "react";
import Slider from "./components/slidercomponent/Slider";
import "./App.css";

const App = () => {
  const images = [
    {
      imageUrl: "/src/assets/jocelyn.png",
      name: "Jocelyn Oliver",
      description:
        "With decades of collaborative experience in real estate, finance and property management, our professionals bring a wealth of knowledge to streamline your property management needs",
    },
    {
      imageUrl: "/src/assets/jordyn.png",
      name: "Jordyn",
      description:
        "With decades of collaborative experience in real estate, finance and property management, our professionals bring a wealth of knowledge to streamline your property management needs",
    },
    {
      imageUrl: "/src/assets/martin.png",
      name: "Martin",
      description:
        "With decades of collaborative experience in real estate, finance and property management, our professionals bring a wealth of knowledge to streamline your property management needs",
    },
    {
      imageUrl: "/src/assets/jordyn.png",
      name: "Jordyn",
      description:
        "With decades of collaborative experience in real estate, finance and property management, our professionals bring a wealth of knowledge to streamline your property management needs",
    },
    {
      imageUrl: "/src/assets/martin.png",
      name: "Martin",
      description:
        "With decades of collaborative experience in real estate, finance and property management, our professionals bring a wealth of knowledge to streamline your property management needs",
    },
  ];

  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
};

export default App;
