import React from 'react';
import LayoutWidget from '../snappLayoutWidget';
import {useStyles} from './style';
import {jssRinc} from '../../style/jss/_rinc';
import moment from 'moment';
const PostComments = (props) => {
  const classes = {...jssRinc(),...useStyles()};
  return (
    <div>
      <LayoutWidget title={props.title}>
        <React.Fragment>
          {props.data.map((comment) => 
            <div key={comment.id} className="media mb-4">
              <img className="d-flex mr-3 rounded-circle" src={comment.author.image} alt={comment.author.username} />
              <div className="media-body">
                <h5 className="mt-0">{comment.author.username}</h5>
                <h6 className="mt-0 pb-3">{moment(comment.createdAt).startOf('day').fromNow()}</h6>
                {comment.body}
              </div>
            </div>
          )}
        </React.Fragment>
      </LayoutWidget>
      <LayoutWidget title="Your Comment">
        <form onSubmit={props.submitComment}>
          <div className="form-group">
          <textarea
            name="text"
            value={props.value}
            onChange={props.onChange}
            className="form-control"
            rows="3"
          >
          </textarea>
          </div>
          <button 
            type="submit"
            className="btn btn-primary"
          >Submit</button>
        </form>
      </LayoutWidget>
    </div>
  )
}

export default PostComments;