import React, { useEffect } from 'react'
import Plant1 from '../../Assets/garden-plant-1.png';
import Plant2 from '../../Assets/garden-plant-2.png';
import Plant3 from '../../Assets/garden-plant-3.png';
import { Tooltip } from 'bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Plants({ data, goal }) {
  const location = useLocation()
  const path = location.pathname.includes("view")
  const navigate = useNavigate()


  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltips = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

    tooltips.forEach(tooltip => {
      tooltip._element.addEventListener('click', () => {
        tooltip.hide();
      });
    });

    return () => {
      tooltips.forEach(tooltip => {
        tooltip._element.removeEventListener('click', () => {
          tooltip.hide();
        });
      });
    };
  }, []);


  const handleNavigate = (id) => {
    navigate(`/user/viewgoal/${id}`)
  }




  let a = goal.milestones.filter(item => item.isCompleted !== false)



  const percentage = a.length > 0 ? (a.length / goal.milestones.length) * 100 : 0;

  if (percentage <= 25) {
    return (<img
      src={Plant1}
      style={{ height: data, cursor: path && "pointer" }}
      className="plant-swing plant-1"
      alt="plant-pic" data-bs-toggle={path && "tooltip"} data-bs-custom-class="custom-tooltip" data-bs-placement="top" title={goal?.name} onClick={() => handleNavigate(goal?._id)} />)
  } else if ((a.length / goal.milestones.length) * 100 <= 50 && (a.length / goal.milestones.length) * 100 > 25) {
    return (
      <img
        src={Plant2}
        style={{ height: data, cursor: path && "pointer" }}
        className="plant-swing plant-1"
        alt="plant-pic" data-bs-toggle={path && "tooltip"} data-bs-custom-class="custom-tooltip" data-bs-placement="top" title={goal?.name} onClick={() => handleNavigate(goal?._id)} />
    )
  } else if ((a.length / goal.milestones.length) * 100 > 50) {
    return (
      <img
        src={Plant3}
        style={{ height: data, cursor: path && "pointer" }}
        className="plant-swing plant-1"
        alt="plant-pic" data-bs-toggle={path && "tooltip"} data-bs-custom-class="custom-tooltip" data-bs-placement="top" title={goal?.name} onClick={() => handleNavigate(goal?._id)} />
    )
  }


}

export default Plants