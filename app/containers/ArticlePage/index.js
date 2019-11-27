import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';
import { Link } from 'react-router-dom';
import './style.scss';
import { articlesBySlugGet } from '../../api/application/articles';

// eslint-disable-next-line react/prefer-stateless-function

const ArticlePage = (props) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const slug = props.match.params.slug;
  useEffect(() => {
    articlesBySlugGet(slug).then(response => {
      setArticle(response.article);
    });
  }, []);

  // updating
  useEffect(() => {
    if (Object.keys(article).length > 0) {
      setLoading(false)
    }
  }, [article]);

  return (
    <React.Fragment>
      {!loading ?
        <React.Fragment>
          <h1 className="mt-4">{article.title}</h1>
          <hr />
          <p>Posted on {article.createdAt}</p>
          <hr />
          <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
          <hr />
          <p className="lead">{article.description}</p>
          <hr />
          {!!article.tagList.length && <div>
            <span>tags:</span>
            <ul>
              {
                article.tagList.map((tag)=>
                  <li>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              }
            </ul>
          </div>}

          
          <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>


          <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
          </div>


          <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
              <h5 className="mt-0">Commenter Name</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  
            <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              </div>

              <div className="media mt-4">
                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              </div>

            </div>
          </div>

        </React.Fragment> :
        <div className="center hFull">
          <Loading />
        </div>
      }
    </React.Fragment>
  );
}

export default ArticlePage;
