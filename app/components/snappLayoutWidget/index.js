import React from 'react';
import { jssRinc } from '../../style/jss/_rinc';
const LayoutWidget = (props) => {
  const { bgWhite, bold } = jssRinc();
  return (
    <div className={`card my-4 border-0 ${props.className}`}>
      <h5 className={`card-header pl-0 pt-0  border-bottom-0 ${bgWhite} ${bold}`}>{props.title}</h5>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutWidget;