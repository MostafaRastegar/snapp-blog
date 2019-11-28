import React from 'react';
import {Link} from 'react-router-dom';
import {useStyles} from './style';
import {jssRinc} from '../../style/jss/_rinc';
import moment from 'moment';
const ArticleCard = (props) => {
  const classes = {...jssRinc(),...useStyles()};
  return (
    <Link to={`/article/${props.data.slug}`}>
      <div className="card mb-4">
        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title">{props.data.title}</h2>
          <p className="card-text">{props.data.description}</p>
        </div>
        <div className="card-footer text-muted">
          <span>by: {props.data.author.username}, </span>
          <span>Date: {moment(props.data.createdAt).format('ll')}</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard;