<template>
  <div class="contents">
    <h1 class="page-header">수정페이지</h1>
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
        <button type="submit" class="btn">수정하기</button>
        <button
          type="button"
          class="btn"
          @click="totheMain"
          style="margin-left:15px;"
        >
          목록으로
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
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
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        alert('수정되었습니다.');
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      } finally {
        this.initFunc();
      }
    },
    totheMain() {
      this.$router.push('/main');
    },
    initFunc() {
      this.title = '';
      this.contents = '';
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    console.log(data);
  },
};
</script>

<style>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
