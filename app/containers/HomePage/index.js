import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';
import { articlesAllGet } from '../../api/application/articles';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		articlesAllGet().then(response => {
			setArticles(response.articles);
		});
	}, []);

	// updating
	useEffect(() => {
		if (articles.length > 0) {
			setLoading(false)
		}
	}, [articles]);

	return (
		<React.Fragment>
			{!loading ?
				<div className="row">
					{articles.map((item) =>
						<div key={item.slug} className="col-6">
							<Link to={`/article/${item.slug}`}>
								<div className="card mb-4">
									<img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
									<div className="card-body">
										<h2 className="card-title">{item.title}</h2>
										<p className="card-text">{item.description}</p>
									</div>
									<div className="card-footer text-muted">
										<span>by: {item.author.username}, </span>
										<span>Date: {item.createdAt}</span>
									</div>
								</div>
							</Link>
						</div>
					)}
				</div> :
				<div className="center hFull">
					<Loading />
				</div>
			}
		</React.Fragment>
	);
}

export default HomePage;
