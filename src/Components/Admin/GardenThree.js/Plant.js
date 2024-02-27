import React, { useState } from 'react';
import { Rect } from 'react-konva';

const Plant = ({ x, y, name, goal }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Rect
      x={x}
      y={y}
      width={50}
      height={50}
      fill={isClicked ? 'green' : 'red'}
      onClick={handleClick}
    />
  );
};

export default Plant;
