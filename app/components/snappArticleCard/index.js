import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './style';
import { jssRinc } from '../../style/jss/_rinc';
import moment from 'moment';
const ArticleCard = (props) => {
  const classes = { ...jssRinc(), ...useStyles() };
  return (
    <Link to={`/article/${props.data.slug}`}>
      <div className="card mb-4">
        <img className="card-img-top" src="http://placehold.it/350x250" alt="Card image cap" />
        <div className="card-body">
          <h2 className={`text-truncate ${classes.primary} ${classes.text16}`}>{props.data.title}</h2>
          <div className={`${classes.gray0} ${classes.text10} ${classes.bottomP15}`}>
            <span>By: {props.data.author.username}, </span>
            <span>Date: {moment(props.data.createdAt).format('ll')}</span>
          </div>
          <p className={`${classes.gray1} ${classes.text14}`}>{props.data.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard;