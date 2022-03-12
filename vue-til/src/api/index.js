import axios from 'axios';
//import store from '@/store/index';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 엑시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}/${url}`,
    // headers: {
    //   Authorization: store.state.token, //*토큰을 심는(잘못된방법)>인터셉터할때 심어야함
    // },
  });
  return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

//CRUD 예시
//GET = posts
//POST =posts
//PUT = posts {id}
//DELELTE = posts {id}
