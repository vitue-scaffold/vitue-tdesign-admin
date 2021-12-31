<template>
  <div class="login-wrapper">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">{{ W6S_PROJECT_NAME }}</h1>
      </div>

      <login v-if="type === 'login'" />
      <register v-else @register-success="switchType('login')" />
      <tdesign-setting />
    </div>

    <footer class="copyright">
      Copyright @ 2021-2022 {{ W6S_PROJECT_NAME }}. All Rights Reserved
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Login from './components/Login.vue';
import LoginHeader from './components/Header.vue';

export default defineComponent({
  name: 'LoginIndex',
  components: {
    Login,
    LoginHeader,
  },
  setup() {
    const type = ref('login');
    const switchType = (val: string) => {
      type.value = val;
    };

    const { W6S_PROJECT_NAME } = import.meta.env;

    return {
      type,
      switchType,
      W6S_PROJECT_NAME,
    };
  },
});
</script>
<style lang="less">
@import url('./index.less');
</style>
