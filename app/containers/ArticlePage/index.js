import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Loading from '../../components/snappLoading';
import LayoutWidget from '../../components/snappLayoutWidget';

import { Link } from 'react-router-dom';
import { articlesBySlugGet } from '../../api/application/articles';
import { commentsAllForArticlesGet, commentsCreateForArticlesPost } from '../../api/application/comment';
import PostComments from '../../components/snappPostComments';
import { addToast } from '../../actions/notifications';
import { jssRinc } from '../../style/jss/_rinc';
import { useStyles } from './style';

const ArticlePage = (props) => {
  const dispatch = useDispatch();
  const classes = { ...jssRinc(), ...useStyles() };
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setCommets] = useState([]);
  const [yourComment, setYourCommet] = useState('');
  const slug = props.match.params.slug;

  useEffect(() => {
    articlesBySlugGet(slug).then(response => {
      setArticle(response.article);
      document.title = response.article.title;
    });
  }, [slug]);

  // show commets list after article load
  useEffect(() => {
    if (Object.keys(article).length > 0) {
      setLoading(false);
      commentsAllForArticlesGet(slug).then(response => {
        setCommets(response.comments);
      });
    }
  }, [article]);


  const onchangeComment = (e) => {
    setYourCommet(e.target.value)
  }

  // submit comment and update comments list
  const submitComment = (event) => {
    event.preventDefault();
    if (yourComment !== '') {
      const commentsObj = {
        slug,
        body: {
          comment: {
            body: yourComment,
          }
        }
      }
      commentsCreateForArticlesPost(commentsObj).then(
        response => {
          if (response.hasOwnProperty('comment') && response.comment.id) {
            dispatch(addToast({
              text: `Sent your comment`,
              color: 'success',
              delay: 3000,
            }));
            commentsAllForArticlesGet(slug).then(response => {
              const elmnt = document.getElementById("comments");
              setCommets(response.comments);
              setYourCommet('');
              elmnt.scrollIntoView();
            });
          }
        }
      ).catch(()=>{
        dispatch(addToast({
          text: `Unauthorized Access`,
          color: 'danger',
          delay: 3000,
        }));
      });
    } else {
      dispatch(addToast({
        text: `Please type some text`,
        color: 'danger',
        delay: 3000,
      }));
    }
  }

  return (
    <React.Fragment>
      {!loading ?
        <div className="page-article">

          <div className={`page-article__content ${classes.bottomM30}`}>
            <h1 className="mt-4">{article.title}</h1>
            <div className={`${classes.gray0} ${classes.text10} ${classes.bottomP15}`}>
              <span>By: {article.author.username}, </span>
              <span>Date: {moment(article.createdAt).format('LL')}</span>
            </div>
            <div className={`${classes.bottomP15}`}>
              <img className="img-fluid rounded" src="http://placehold.it/700x400" alt="" />
            </div>
            <p>{article.description}</p>
          </div>


          {!!article.tagList.length &&
            <div className={`page-article__tags ${classes.bottomM50}`}>
              <span>Tags </span>
              {article.tagList.map((tag, index) =>
                <Link key={index} className={
                  `${classes.round3} ${classes.border} ${classes.dInlineBlock} ${classes.tagsItem}`
                } to={`/tags/${tag}`}>{tag}</Link>
              )
              }
            </div>
          }


          <div key={article.id} className={`page-article__author media ${classes.bottomM50}`}>
            <img className={`d-flex mr-3 ${classes.authorImageSize}`} src={article.author.image} alt={article.author.username} />
            <div className="media-body">
              <h5 className={`${classes.padd0} ${classes.margin0}`}>{article.author.username}</h5>
              <span className={`${classes.text10} ${classes.gray0}`}>Post Editor</span>
              <p className={`${classes.topP15}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?
              </p>
            </div>
          </div>

          {!!comments.length &&
            <div className='page-article__comments' id="comments">
              <PostComments
                title={`${comments.length} comments`}
                data={comments}
              />
            </div>
          }
   
          <LayoutWidget title="Your Comment">
            <form onSubmit={submitComment}>
              <div className="form-group">
                <textarea
                  name="text"
                  value={yourComment}
                  onChange={onchangeComment}
                  className="form-control"
                  rows="3"
                >
                </textarea>
              </div>
              <button
                type="submit"
                className="btn btn-secondary"
              >Submit</button>
            </form>
          </LayoutWidget>

        </div> :
        <div className="center hFull">
          <Loading />
        </div>
      }
    </React.Fragment>
  );
}

export default ArticlePage;
