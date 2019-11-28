import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';
import { Link } from 'react-router-dom';
import './style.scss';
import { articlesBySlugGet } from '../../api/application/articles';
import { commentsAllForArticlesGet,commentsCreateForArticlesPost } from '../../api/application/comment';
import PostComments from '../../components/snappPostComments';
import { addToast } from 'actions/notifications';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// eslint-disable-next-line react/prefer-stateless-function

const ArticlePage = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setCommets] = useState([]);
  const [yourComment, setYourCommet] = useState('');
  const slug = props.match.params.slug;

  useEffect(() => {
    articlesBySlugGet(slug).then(response => {
      setArticle(response.article);
    });
  }, []);

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
  const submitComment = (event)=>{
    event.preventDefault();
    if(yourComment !== ''){
      const commentsObj = {
        slug,
        body:{
          comment:{
            body:yourComment,
          }
        }
      }
      dispatch(addToast({
        text: `Sent your comment`,
        color: 'success',
        delay: 3000,
      }));
      commentsCreateForArticlesPost(commentsObj).then(
        response => {
          if(response.hasOwnProperty('comment') && response.comment.id){
            commentsAllForArticlesGet(slug).then(response => {
              const elmnt = document.getElementById("comments");
              setCommets(response.comments);
              setYourCommet('');
              elmnt.scrollIntoView();
            });
          }
        }
      );
    }else{
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
        <React.Fragment>
          <h1 className="mt-4">{article.title}</h1>
          <hr />
          <p>Posted on {moment(article.createdAt).format('LL') }</p>
          <hr />
          <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
          <hr />
          <p className="lead">{article.description}</p>
          <hr />
          {!!article.tagList.length && <div>
            <span>tags:</span>
            <ul>
              {article.tagList.map((tag,index)=>
                  <li key={index}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              }
            </ul>
          </div>}

          {!!comments.length &&
            <div id="comments">
              <PostComments 
                title={`${comments.length} comments`}
                data={comments}
                onChange={onchangeComment}
                value={yourComment}
                submitComment={submitComment}
              />
            </div>
          }

        </React.Fragment> :
        <div className="center hFull">
          <Loading />
        </div>
      }
    </React.Fragment>
  );
}

export default ArticlePage;
