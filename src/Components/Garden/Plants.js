import React from 'react'
import Plant1 from '../../Assets/garden-plant-1.png';
import Plant2 from '../../Assets/garden-plant-2.png';
import Plant3 from '../../Assets/garden-plant-3.png';
function Plants({label, data}) {
  return (
    <>
{
    label === 1 && <img
    src={Plant1}
    style={{height: data}}
    className="plant-swing plant-1"
    alt="plant-pic"/>
}
{
    label === 2 && <img
    src={Plant2}
    style={{height: data}}
    className="plant-swing plant-1"
    alt="plant-pic"/>
}
{
    label === 3 && <img
    src={Plant3}
    style={{height: data}}
    className="plant-swing plant-1"
    alt="plant-pic"/>
}

    </>
  )
}

export default Plants