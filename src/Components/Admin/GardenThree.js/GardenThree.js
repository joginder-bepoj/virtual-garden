import React from 'react';
import Plant from './Plant';
const GardenThree = ({ plants }) => {
    return (
      <div className="garden">
        {plants.map((plant, index) => (
          <Plant
            key={index}
            x={plant.x}
            y={plant.y}
            name={plant.name}
            goal={plant.goal}
          />
        ))}
      </div>
    );
  };

  
  export default GardenThree;