import {app} from '../../constants';
import deRequest from '../../../../app/utils/deRequest';

export const commentsAllForArticlesGet = (slug) => deRequest(app.comments_all_for_articles_get(slug), 'GET');
export const commentsCreateForArticlesPost = (slug) => deRequest(app.comments_create_for_articles_post(slug), 'POST' ,params, false);
