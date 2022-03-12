<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <p>b@b.com</p>
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
      <a :href="linkinfo" class="link" target="_blank">
        자바스크립트 email validation 정규표현식코드
      </a>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
      linkinfo:
        'https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        // store에 action으로 옮김==
        // const { data } = await loginUser(userData);
        // console.log(data.token);
        // this.$store.commit('setToken', data.token);
        // this.$store.commit('setUsername', data.user.nickname);
        // saveAuthToCookie(data.token);
        // saveUserToCookie(data.user.nickname);
        // this.logMessage = alert(`${data.user.nickname}님 환영합니다`);
        // store에 action으로 옮김==

        this.$router.push('/main');
        //this.initForm();
      } catch (error) {
        console.log(error.response);
        //console.log(error.response.data);
        this.logMessage = error.response.data;
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
