import React from 'react';
import LayoutWidget from '../snappLayoutWidget';
import {useStyles} from './style';
import {jssRinc} from '../../style/jss/_rinc';
import moment from 'moment';
const LatesPost = (props) => {
  const classes = {...jssRinc(),...useStyles()};
  return (
    <div>
      <LayoutWidget title={props.title}>
        <ul className="list-group border-0">
          {props.data.map((item) => 
              <li key={item.slug} className={`list-group-item border-left-0 border-right-0 pl-0 ${classes.flex} ${classes.rRow}`}>
                <div className={classes.flex}>
                  <img src='http://placehold.it/200x200' className={classes.posterImageSize}/>
                </div>
                <div className={`${classes.rCol} ${classes.flex} ${classes.leftP10}`}>
                  <span>{item.title}</span>
                  <span 
                    className={`${classes.flex} ${classes.topMauto} ${classes.gray0} ${classes.text12}`}>
                      Post {moment(item.createdAt).format("MMM Do YY")}
                  </span>
                </div>
              </li>
          )}
        </ul>
      </LayoutWidget>
    </div>
  )
}

export default LatesPost;