import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';
import ArticleCard from '../../components/snappArticleCard';
import { articlesAllGet } from '../../api/application/articles';


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
							<ArticleCard data={item}/>
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
