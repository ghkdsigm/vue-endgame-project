<template>
  <div class="contents">
    <h1 class="page-header">생성페이지</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="cotents">Contents:</label>
          <textarea type="text" id="cotents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            문자는 200자 이하로 작성해주세요
          </p>
        </div>
        <button type="submit" class="btn">등록하기</button>
        <!-- <button type="button" class="btn" @click="totheMain">목록으로</button> -->
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPosts } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPosts({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
        alert('등록되었습니다.');
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
