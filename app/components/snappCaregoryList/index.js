import React from 'react';
import LayoutWidget from '../snappLayoutWidget';
import { Link } from 'react-router-dom';
const CaregoryList = (props) => {
  return (
    <LayoutWidget title={props.title}>
      <ul className="list-group border-0">
        {props.data.map((item, index) =>
          <li key={index} className="list-group-item border-left-0 border-right-0 pl-0">
            <Link to={`/tags/${item}`}>{item}</Link>
          </li>
        )}
      </ul>
    </LayoutWidget>
  )
}

export default CaregoryList;