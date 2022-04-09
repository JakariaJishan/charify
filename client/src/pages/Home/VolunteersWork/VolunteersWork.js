import React from "react";
import InnerVolunteers from "./InnerVolunteers";

const VolunteersWork = () => {
  const demoObj = [
    {
      img: "./images/animalShelter.png",
      name: "cleaning",
      id: 1
    },
    {
      img: "./images/animalShelter.png",
      name: "refuse shelter",
      id:2
    },
    {
      img: "./images/animalShelter.png",
      name: "charity",
      id:3
    },
    {
      img: "./images/animalShelter.png",
      name: "child support",
      id:4
    },
  ];
  return (
    <div class="grid grid-cols-4 gap-5 text-center">
      {demoObj.map((items) => (
        <InnerVolunteers key={Math.random()} items={items} />
      ))}
    </div>
  );
};

export default VolunteersWork;
