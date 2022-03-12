<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="sumbitForm" class="form">
        <div>
          <label for="username">Id:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="이메일형식"
          />
        </div>
        <div>
          <label for="password">Pw:</label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">Nickname:</label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <button type="submit" :disabled="!isUsernameValid || !password">
          회원가입
        </button>
        <p>{{ logMessage }}</p>
        <a :href="linkinfo" class="link" target="_blank">
          자바스크립트 password validation 정규표현식코드
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      //log
      logMessage: '',
      linkinfo: 'https://hee-kkk.tistory.com/22',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async sumbitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username}님이 가입되었습니다`;
      } catch (error) {
        console.log(error.response);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped></style>
