import React from 'react';
import LayoutWidget from '../snappLayoutWidget';
const CaregoryList = (props) => {
  return (
    <LayoutWidget title={props.title}>
      <ul className="list-group border-0">
        {props.data.map((item,index) => 
            <li key={index} className="list-group-item border-left-0 border-right-0 pl-0">{item}</li>
        )}
      </ul>
    </LayoutWidget>
  )
}

export default CaregoryList;