import axios from 'axios';
//import store from '@/store/index';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token, //*토큰을 심는(잘못된방법)>인터셉터할때 심어야함
    // },
  });
  return setInterceptors(instance);
}
const instance = createInstance();

//회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

//로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

//학습 노트 데이터 조회 API
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
