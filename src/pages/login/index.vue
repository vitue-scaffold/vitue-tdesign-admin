<template>
  <div class="login-wrapper">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">Vitue Starter</h1>
      </div>

      <login v-if="type === 'login'" />
      <register v-else @register-success="switchType('login')" />
      <tdesign-setting />
    </div>

    <footer class="copyright">Copyright @ 2021-2022 Vitue. All Rights Reserved</footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import Login from './components/Login.vue';
import LoginHeader from './components/Header.vue';
import TdesignSetting from '@/layouts/setting.vue';

export default defineComponent({
  name: 'LoginIndex',
  components: {
    Login,
    LoginHeader,
    TdesignSetting,
  },
  setup() {
    const type = ref('login');
    const switchType = (val: string) => {
      type.value = val;
    };

    return {
      type,
      switchType,
    };
  },
});
</script>
<style lang="less">
@import url('./index.less');
</style>
