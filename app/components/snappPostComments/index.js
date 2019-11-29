import React from 'react';
import LayoutWidget from '../snappLayoutWidget';
import { useStyles } from './style';
import { jssRinc } from '../../style/jss/_rinc';
import moment from 'moment';
const PostComments = (props) => {
  const classes = { ...jssRinc(), ...useStyles() };
  return (
    <React.Fragment>
      <LayoutWidget title={props.title} className={classes.pageArticleComments}>
        <React.Fragment>
          {props.data.map((comment) =>
            <div key={comment.id} className="media mb-4">
              <img className={`d-flex mr-3 ${classes.authorImageSize}`} src={comment.author.image} alt={comment.author.username} />
              <div className="media-body">
                <h5 className={`mt-0 ${classes.bold}`}>{comment.author.username}</h5>
                <h6 className={`mt-0 pb-3 ${classes.gray0} ${classes.text12}`}>{moment(comment.createdAt).startOf('day').fromNow()}</h6>
                <p className="p-0 m-0">{comment.body}</p>
              </div>
            </div>
          )}
        </React.Fragment>
      </LayoutWidget>
    </React.Fragment>
  )
}

export default PostComments;