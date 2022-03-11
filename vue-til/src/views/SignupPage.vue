<template>
  <div>
    <h1 class="page-header">회원 가입 페이지</h1>
    <img :src="images[0].url" alt="" width="100px" />
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
  components: {
    SignupForm,
  },
  data() {
    return {
      images: [{ url: require('@/assets/logo.png') }],
    };
  },
};
</script>

<style>
img {
  display: block;
  margin: 0 auto;
}
</style>
