import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

async function fetchUserInfo(userId) {
    return await axios.get(`${config.baseUrl}user/${userId}.json`);
}

async function fetchCommentItem(itemId) {
    return await axios.get(`${config.baseUrl}item/${itemId}.json`);
}

async function fetchList(pageName) {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchUserInfo,
    fetchCommentItem,
    fetchList,
}