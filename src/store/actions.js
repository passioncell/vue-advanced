import { fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
  async FETCH_USER(context, userId) {
    const response = await fetchUserInfo(userId);
    context.commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM(context, itemId) {
    const response = await fetchCommentItem(itemId);
    context.commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  }
}