import http from '../utils/http';
import API from '../constants/api';

const PAGE_LIMIT = 10;

/**
 * @param {String} newsType
 * Fetch news data from the api.
 */
export async function getNewsIds(newsType) {
  const filteredNewsType = await matchNewsTypeToUrl(newsType);

  const apiData = await http.get(filteredNewsType);

  return Promise.resolve(apiData.data);
}

/**
 * @param {any} ids
 * @param {any} page
 * @returns {Object}
 */
export function getNewsStories(ids, page) {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: ids });
  const stroyPromises = activeIds.map(id => getStory(id));

  return Promise.all(stroyPromises);
}

/**
 * @param {Array} commentsIds
 * @returns {Object}
 */
export function getComments(commentsIds) {
  const comments = commentsIds.map(id => getCommentsFromId(id));

  return Promise.all(comments);
}

/**
 * @param {*} commentId
 * @returns {Object<Promise>}
 */
const getCommentsFromId = commentId =>
  http.get(`${API.COMMENTS}/${commentId}.json`);

/**
 * @param {*} newsId
 * @returns {Object}
 */
const getStory = newsId => http.get(`/item/${newsId}.json`);

/**
 * @param {*} limit
 * @param {*} page
 * @returns {Object}
 */
const getPageSlice = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit
});

/**
 * @param {*} param
 * @returns {Object}
 */
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

/**
 * @param {String}newsType
 * @returns {number} News type.
 */
const matchNewsTypeToUrl = newsType => {
  switch (newsType) {
    case 'newnews':
      return API.NEWSTORIES;
    case 'topnews':
      return API.TOPSTORIES;
    case 'bestnews':
      return API.BESTSTORIES;
    default:
      return API.NEWSTORIES;
  }
};
