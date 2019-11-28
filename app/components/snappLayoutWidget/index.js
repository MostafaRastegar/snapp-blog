import React from 'react';
import {jssRinc} from '../../style/jss/_rinc';
const LayoutWidget = (props) => {
  const classes = jssRinc();
  return (
    <div className={`card my-4 border-0 ${props.className}`}>
      <h5 className={`card-header pl-0  border-bottom-0 ${classes.bgWhite}`}>{props.title}</h5>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutWidget;