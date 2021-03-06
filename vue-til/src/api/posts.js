// 학습 노트 조작과 관련된 CRUDE API 함수 파일
import { posts } from './index';

//학습 노트 데이터 목록을 조회 API
function fetchPosts() {
  return posts.get('/');
}

//학습 노트를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

//학습 노트 데이터 생성 API
function createPosts(postData) {
  return posts.post('/', postData);
}

//학습 노트 데이터 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

//학습 노트 데이터 수정 API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPosts, deletePost, editPost };
